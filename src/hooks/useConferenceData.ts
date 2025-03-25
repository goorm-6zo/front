import { useQuery } from '@tanstack/react-query';
import { getConferenceInfo } from '../api/admin/conference/getConferenceInfo';

export interface ConferenceInfo {
  id: number;
  name: string;
  capacity: number;
  startTime: string;
  attend: number;
  sessions: {
    id: number;
    name: string;
    capacity: string;
    startTime: string;
  }[];
}

export default function useConferenceData() {
  const conferenceDataQuery = useQuery<ConferenceInfo>({
    queryKey: ['conferenceData', 1],
    queryFn: async () => {
      const data = await getConferenceInfo(1);
      return data;
    },
  });

  return {
    conferenceDataQuery,
  };
}
