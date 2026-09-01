import assert from 'node:assert/strict';
import test from 'node:test';

import {
  commentBelongsToDocket,
  isGroundedQuote,
  MAX_RESULT_PAGE,
  validatedResultPage,
} from '../lib/docket-guards.ts';
import { safeCommentDetail } from '../lib/regulations-public.ts';

void test('quote grounding accepts only exact normalized source text', () => {
  const source =
    'Consumers should receive a clear and simple cancellation path.';
  assert.equal(
    isGroundedQuote(source, 'clear and simple cancellation path'),
    true,
  );
  assert.equal(
    isGroundedQuote(source, 'companies must refund everyone'),
    false,
  );
  assert.equal(isGroundedQuote(source, 'too short'), false);
});

void test('cross-docket records are rejected', () => {
  assert.equal(commentBelongsToDocket('FTC-2023-0033', 'FTC-2023-0033'), true);
  assert.equal(
    commentBelongsToDocket('FTC-2023-0033', 'COLC-2023-0006'),
    false,
  );
});

void test('public comment shape omits private contact and unknown fields', () => {
  const comment = safeCommentDetail({
    data: {
      id: 'FTC-2023-0033-1056',
      attributes: {
        docketId: 'FTC-2023-0033',
        title: 'Public submission',
        comment: '<p>Inline public text.</p>',
        email: 'private@example.com',
        phone: '555-0100',
        address1: 'Private address',
        unexpectedInternalField: 'secret',
      },
    },
  });

  assert.equal(comment.body, 'Inline public text.');
  assert.equal('email' in comment, false);
  assert.equal('phone' in comment, false);
  assert.equal('address1' in comment, false);
  assert.equal('unexpectedInternalField' in comment, false);
});

void test('pagination rejects requests beyond the documented result window', () => {
  assert.equal(validatedResultPage(1), 1);
  assert.equal(validatedResultPage(MAX_RESULT_PAGE), MAX_RESULT_PAGE);
  assert.throws(
    () => validatedResultPage(MAX_RESULT_PAGE + 1),
    /Result page must be between/,
  );
  assert.throws(() => validatedResultPage(0), /Result page must be between/);
});
