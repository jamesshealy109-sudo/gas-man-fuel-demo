import test from "node:test";import assert from "node:assert/strict";import { assertPaymentTransition,membershipAfterPayment } from "../src/server/payments/state-machine.ts";
test("verified success activates a pending membership",()=>assert.equal(membershipAfterPayment("succeeded","pending_payment"),"active"));
test("failed renewal marks an active membership past due",()=>assert.equal(membershipAfterPayment("failed","active"),"past_due"));
test("duplicate same-state event is idempotent",()=>assert.doesNotThrow(()=>assertPaymentTransition("succeeded","succeeded")));
test("invalid transition is rejected",()=>assert.throws(()=>assertPaymentTransition("refunded","succeeded"),/Invalid payment transition/));

