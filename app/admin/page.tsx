import { AdminDashboard } from "../components/AdminDashboard";import { requireChatGPTUser } from "../chatgpt-auth";
export const dynamic="force-dynamic";
export default async function Admin(){await requireChatGPTUser("/admin");return <AdminDashboard/>}
