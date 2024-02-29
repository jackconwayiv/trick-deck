import { CampaignType } from "../types";
import { akhCampaign, mkmCampaign } from "./akhCampaign";

interface CampaignsType {
  [key: string]: CampaignType;
}

const campaigns: CampaignsType = { AKH: akhCampaign, MKM: mkmCampaign };
export default campaigns;
