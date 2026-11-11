
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Article Processing Charges | JPSA",
  description:
    "Article processing charges, waiver eligibility and payment policy of the Journal of Physical Sciences Advances.",
};

export default function APCPage() {
  return (
    <main className="container page">
      <div className="eyebrow">PUBLICATION INFORMATION</div>

      <h1>Article Processing Charges</h1>

      <p className="lead">
        The Journal of Physical Sciences Advances (JPSA) aims
        to maintain a transparent and accessible publication
        process. Article Processing Charges (APCs), where
        applicable, support the editorial and technical
        activities involved in preparing accepted manuscripts
        for publication.
      </p>

      <section className="prose">
        <h2>1. Article Processing Charge Policy</h2>

        <p>
          JPSA proposes a publication charge structure based
          on the author's billing location, manuscript length
          and article category. The applicable charge is
          communicated to the corresponding author following
          formal acceptance of the manuscript.
        </p>

        <p>
          No payment is required at the time of submission
          or during peer review. Manuscripts are evaluated
          on their scientific merit and editorial suitability,
          independently of the author's ability or willingness
          to pay publication charges.
        </p>


<h2>2. Article Processing Charges</h2>

<p>
  JPSA proposes separate publication charges for Indian
  and international authors. The applicable charge is
  determined by the article category and manuscript length.
  Payment is requested only after formal acceptance.
</p>

<div className="apc-rate-grid">
  <div className="apc-rate-card">
    <div className="apc-rate-header">
      <span className="apc-rate-label">INDIAN AUTHORS</span>
      <h3>Authors based in India</h3>
      <p>Publication charges in Indian Rupees (INR)</p>
    </div>

    <div className="apc-rate-list">
      <div className="apc-rate-item">
        <div>
          <strong>Research Article</strong>
          <span>Up to 10 pages</span>
        </div>
        <strong className="apc-price">₹3,000</strong>
      </div>

      <div className="apc-rate-item">
        <div>
          <strong>Research Article</strong>
          <span>11–15 pages</span>
        </div>
        <strong className="apc-price">₹4,000</strong>
      </div>

      <div className="apc-rate-item">
        <div>
          <strong>Review Article</strong>
          <span>20 pages or more</span>
        </div>
        <strong className="apc-price">₹5,000</strong>
      </div>
    </div>

    <p className="apc-rate-note">
      Rates for other manuscript lengths will be
      communicated after the fee structure is formally approved.
    </p>
  </div>

  <div className="apc-rate-card">
    <div className="apc-rate-header">
      <span className="apc-rate-label">INTERNATIONAL AUTHORS</span>
      <h3>Authors based outside India</h3>
      <p>Publication charges in United States Dollars (USD)</p>
    </div>

    <div className="apc-rate-list">
      <div className="apc-rate-item">
        <div>
          <strong>Research Article</strong>
          <span>Up to 15 pages</span>
        </div>
        <strong className="apc-price">$50</strong>
      </div>

      <div className="apc-rate-item">
        <div>
          <strong>Research Article</strong>
          <span>More than 15 pages</span>
        </div>
        <strong className="apc-price">$75</strong>
      </div>

      <div className="apc-rate-item">
        <div>
          <strong>Review Article</strong>
          <span>All review articles</span>
        </div>
        <strong className="apc-price">$100</strong>
      </div>
    </div>

    <p className="apc-rate-note">
      The review-article category takes precedence over
      the regular research-article page-based rates.
    </p>
  </div>
</div>

        <h2>4. What the APC Covers</h2>

        <p>
          Article Processing Charges are intended to support
          the activities associated with the editorial
          preparation and publication of accepted manuscripts.
          Depending on the services provided by the journal,
          these activities may include:
        </p>

        <ul>
          <li>Editorial and publication administration.</li>
          <li>Manuscript preparation and formatting.</li>
          <li>Copyediting and language-related corrections.</li>
          <li>Typesetting and preparation of publication files.</li>
          <li>Online publication and website hosting.</li>
          <li>DOI registration and publication metadata, where applicable.</li>
          <li>Digital archiving and preservation arrangements.</li>
        </ul>

        <p>
          The APC does not represent a payment for acceptance,
          favourable peer review or guaranteed publication.
        </p>

        <h2>5. When Is the APC Payable?</h2>

        <p>
          The APC is payable only after a manuscript has
          received formal acceptance following the applicable
          editorial assessment and peer review process.
        </p>

        <p>
          Authors should wait for an official acceptance
          communication and payment instructions from the
          editorial office before making any payment.
          No APC is payable for a manuscript that has
          been rejected.
        </p>

        <p>
          Payment of the APC is required to proceed with
          publication where the charge applies, unless
          a full waiver has been formally approved.
        </p>

        <h2>6. Waiver and Discount Eligibility</h2>

        <p>
          JPSA recognises that publication costs may create
          difficulties for researchers who do not have
          institutional funding or adequate financial
          support. Authors may therefore request a full
          or partial waiver of the applicable APC.
        </p>

        <p>
          Waiver requests may be considered under the
          following circumstances:
        </p>

        <ul>
          <li>
            Authors based in low-income or lower-middle-income
            countries who face significant financial
            constraints.
          </li>
          <li>
            Students and early-career researchers without
            access to institutional or research funding.
          </li>
          <li>
            Authors whose research has received no grant,
            institutional or other financial support.
          </li>
          <li>
            Researchers from institutions with limited
            resources and no available publication budget.
          </li>
          <li>
            Authors experiencing exceptional financial
            or institutional circumstances.
          </li>
        </ul>

        <p>
          Eligibility for consideration does not guarantee
          approval. Each request will be evaluated
          individually, taking into account the
          circumstances explained by the corresponding
          author.
        </p>

        <h2>7. Requesting a Waiver</h2>

        <p>
          Authors seeking a full or partial waiver should
          submit a written request to the editorial office.
          The request should preferably be made at the
          time of manuscript submission or before the
          manuscript receives an editorial decision.
        </p>

        <p>
          The request should briefly explain the financial
          circumstances, funding availability and reason
          for seeking assistance. Supporting information
          may be requested where necessary.
        </p>

        <p>
          Waiver decisions should be communicated
          independently of the scientific evaluation
          of the manuscript. Authors should not assume
          that a waiver has been granted until they
          receive written confirmation.
        </p>

        <h2>8. Editorial Independence</h2>

        <p>
          The ability or inability of an author to pay
          an APC must not influence the scientific
          assessment of a manuscript or the editorial
          decision.
        </p>

        <p>
          Editors and reviewers should evaluate
          submissions according to their originality,
          scientific quality, relevance and compliance
          with the journal's publication policies.
          Payment must not guarantee acceptance,
          accelerate peer review or influence reviewer
          recommendations.
        </p>

        <h2>9. Payment Procedure and Receipt</h2>

        <p>
          Following acceptance, the corresponding author
          will receive the applicable APC amount and
          official payment instructions from the journal.
          Authors should make payments only through
          payment channels formally authorised by JPSA.
        </p>

        <p>
          The corresponding author should retain proof
          of payment and provide transaction details
          when requested. An official acknowledgement
          or receipt should be issued for verified
          payments.
        </p>

        <p>
          Authors should not transfer publication
          charges to personal bank accounts or
          unofficial payment recipients.
        </p>

        <h2>10. Taxes and Currency</h2>

        <p>
          Indian authors will be quoted charges in
          Indian Rupees (INR), while international
          authors will be quoted charges in United
          States Dollars (USD).
        </p>

        <p>
          Applicable taxes, including GST where
          legally required, will be communicated
          transparently before payment. Any
          applicable international transaction
          or currency conversion charges imposed
          by payment providers or banks may be
          borne by the payer.
        </p>

        <h2>11. Refund Policy</h2>

        <p>
          APC payments are associated with the
          processing and publication of accepted
          manuscripts. Refund requests will be
          considered in accordance with the
          circumstances of the payment.
        </p>

        <p>
          Duplicate payments, excess payments and
          payments made in error may be reviewed
          for correction or refund after verification.
        </p>

        <p>
          Where a manuscript is withdrawn after
          acceptance, the corresponding author
          should contact the editorial office.
          Any refund will be considered on a
          case-by-case basis, taking into account
          the publication work already completed
          and the journal's approved refund terms.
        </p>

        <h2>12. No Additional Undisclosed Charges</h2>

        <p>
          JPSA should communicate all mandatory
          publication charges to authors before
          payment. Authors should not be asked
          to pay undisclosed fees for submission,
          peer review or editorial acceptance.
        </p>

        <p>
          Any additional optional services or
          charges, if introduced, must be
          communicated separately and clearly
          identified as optional.
        </p>

        <h2>13. Changes to APC Rates</h2>

        <p>
          The journal reserves the right to review
          its publication charges in response to
          changes in publication and operational
          costs. Any revised fee structure should
          be published on the official journal
          website with its effective date.
        </p>

        <p>
          Authors should be informed of the
          applicable charges before they proceed
          with payment.
        </p>

        <h2>Related information</h2>

        <p>
          Authors are encouraged to review the
          following information before submitting
          their manuscripts:
        </p>

        <ul>
          <li>
            <Link href="/authors/guidelines">
              Author Guidelines
            </Link>
          </li>
          <li>
            <Link href="/authors/manuscript-preparation">
              Manuscript Preparation
            </Link>
          </li>
          <li>
            <Link href="/authors/peer-review">
              Peer Review Process
            </Link>
          </li>
          <li>
            <Link href="/authors/submission-process">
              Submission Process
            </Link>
          </li>
          <li>
            <Link href="/policies/publication-ethics">
              Publication Ethics
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
