export type PaymentState="pending"|"processing"|"succeeded"|"failed"|"refunded"|"canceled";
export type MembershipState="pending_payment"|"active"|"past_due"|"canceled"|"expired";
const allowed:Record<PaymentState,PaymentState[]>={pending:["processing","succeeded","failed","canceled"],processing:["succeeded","failed","canceled"],succeeded:["refunded"],failed:["processing","canceled"],refunded:[],canceled:[]};
export function assertPaymentTransition(from:PaymentState,to:PaymentState){if(from===to)return;if(!allowed[from].includes(to))throw new Error(`Invalid payment transition: ${from} -> ${to}`)}
export function membershipAfterPayment(payment:PaymentState,current:MembershipState):MembershipState{if(payment==="succeeded")return"active";if(payment==="failed"&&current==="active")return"past_due";if(payment==="canceled")return"canceled";if(payment==="refunded"&&current==="active")return"canceled";return current}

