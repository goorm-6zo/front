import { useEffect, useState } from 'react';
import { disconnectSSE } from '../api/sse/unsubscribe';

interface EntryCounts {
  conferenceAttend: number;
  sessions: Record<number, number>;
}

export default function useSSE(conferenceId: number, sessionIds: number[]) {
  const [entryCounts, setEntryCounts] = useState<EntryCounts>({
    conferenceAttend: 0,
    sessions: {},
  });

  useEffect(() => {
    if (!conferenceId) return;

    const baseSSEUrl = `${import.meta.env.VITE_API_BASE_URL}/sse/subscribe`;

    // 컨퍼런스 SSE 연결
    const conferenceUrl = `${baseSSEUrl}?conferenceId=${conferenceId}`;
    const conferenceEventSource = new EventSource(conferenceUrl);

    conferenceEventSource.addEventListener('open', () => {
      console.log(`컨퍼런스 ${conferenceId} SSE 연결됨`);
    });

    conferenceEventSource.addEventListener('AttendanceCount', (event) => {
      try {
        console.log(`컨퍼런스 ${conferenceId} SSE 메시지: ${event.data}`);
        setEntryCounts((prevCounts) => ({
          ...prevCounts,
          conferenceAttend: event.data,
        }));
      } catch (error) {
        console.warn('컨퍼런스 SSE 데이터 오류:', event.data);
      }
    });

    // 세션 SSE 연결
    const sessionEventSources: EventSource[] = [];

    sessionIds.forEach((sessionId) => {
      const sessionUrl = `${baseSSEUrl}?conferenceId=${conferenceId}&sessionId=${sessionId}`;
      const sessionEventSource = new EventSource(sessionUrl);
      sessionEventSources.push(sessionEventSource);

      sessionEventSource.addEventListener('AttendanceCount', (event) => {
        try {
          console.log(`세션 ${sessionId} SSE 메시지: ${event.data}`);
          setEntryCounts((prevCounts) => ({
            ...prevCounts,
            sessions: {
              ...prevCounts.sessions,
              [sessionId]: event.data,
            },
          }));
        } catch (error) {
          console.warn(`세션 데이터 오류 (세션 ID: ${sessionId}):`, event.data);
        }
      });
    });

    return () => {
      sessionEventSources.forEach((source, index) => {
        console.log(`세션 ${sessionIds[index]} SSE 연결 해제`);
        source.close();
        disconnectSSE(conferenceId, sessionIds[index]);
      });

      conferenceEventSource.close();
      disconnectSSE(conferenceId);
      console.log(`컨퍼런스 ${conferenceId} SSE 해제 완료`);
    };
  }, []);

  return entryCounts;
}
