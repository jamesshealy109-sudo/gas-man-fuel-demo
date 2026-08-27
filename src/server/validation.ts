import { z } from "zod";
export const enrollmentSchema=z.object({firstName:z.string().trim().min(1).max(80),lastName:z.string().trim().min(1).max(80),email:z.string().email().max(254),phone:z.string().min(7).max(30),address:z.string().min(3).max(160),city:z.string().min(2).max(80),state:z.string().length(2),zip:z.string().regex(/^\d{5}(?:-\d{4})?$/),vehicle:z.string().min(2).max(120),fuel:z.enum(["Regular Unleaded","Premium","Diesel"]),plan:z.enum(["cruise-control","fast-lane"]),simulate:z.enum(["success","failure"]).optional().default("success")});
export const webhookSchema=z.object({id:z.string().min(1),type:z.enum(["payment.succeeded","payment.failed","payment.refunded","payment.canceled"]),paymentId:z.string().min(1),occurredAt:z.string().datetime()});

