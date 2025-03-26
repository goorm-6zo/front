import { useQuery } from '@tanstack/react-query';
import { getConferenceInfo } from '../api/admin/conference/getConferenceInfo';

export interface ConferenceInfo {
  id: number;
  name: string;
  capacity: number;
  description: string;
  imageUrl: string;
  location: string;
  startTime: string;
  endTime: string;
  isActive: boolean;
  attend: number;
  hassSessions: boolean;
  sessions: {
    conferenceId: number;
    id: number;
    name: string;
    capacity: string;
    location: string;
    startTime: string;
    endTime: string;
    summary: string;
    speakerName: string;
    speakerOrganization: string;
    speakerImage: string;
    speakerStatus: boolean;
    active: boolean;
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
