
import Link from "next/link";

const authorRights = [
  {
    title: "Ownership of Original Work",
    description:
      "Authors should retain ownership of their original intellectual contributions unless a separate written agreement establishes otherwise. Submission of a manuscript does not, by itself, establish that copyright has been transferred to the journal.",
  },
  {
    title: "Reuse of Published Work",
    description:
      "Authors may retain the ability to use their work in future academic activities, including teaching, research presentations, institutional repositories, and scholarly communication, subject to the applicable publication agreement and licence.",
  },
  {
    title: "Author-Accepted Manuscripts",
    description:
      "Authors may use accepted versions of their manuscripts in accordance with the journal's applicable self-archiving and repository requirements. The version deposited, any required acknowledgement, and any applicable embargo should follow the publication agreement.",
  },
  {
    title: "Acknowledgement of First Publication",
    description:
      "Where an article has been published by JPSA, subsequent authorised distribution or reuse should acknowledge the original publication and provide an appropriate citation to the published article.",
  },
];

const thirdPartyRequirements = [
  "Identify the original source and rights holder of the material.",
  "Determine whether the material is protected by copyright or another applicable intellectual property right.",
  "Obtain written permission where the proposed use requires permission.",
  "Provide appropriate attribution and reproduce any required copyright or licence notice.",
  "Retain documentation of permissions and provide it to the editorial office when requested.",
];

const reuseGuidance = [
  {
    title: "Educational and Research Use",
    description:
      "Use of an article for teaching, private study, research discussion, or scholarly reference may be permitted under applicable copyright exceptions or the article's licence. Users should not assume that every form of reproduction or redistribution is automatically permitted.",
  },
  {
    title: "Repository Deposits",
    description:
      "Depositing a manuscript or published article in an institutional or subject repository should follow the rights and conditions applicable to the relevant manuscript version and publication agreement.",
  },
  {
    title: "Reproduction in Other Publications",
    description:
      "Reproducing an article, substantial extracts, figures, tables, or other protected material in another publication may require permission from the relevant rights holder unless an applicable licence or legal exception permits the use.",
  },
  {
    title: "Commercial Reuse",
    description:
      "Commercial redistribution, adaptation, republication, or other commercial exploitation must comply with the applicable copyright ownership and licence terms. Permission should be obtained where required.",
  },
];

export default function Page() {
  return (
    <div className="container page journal-content-page">
      <div className="eyebrow">PUBLICATION POLICIES</div>
      <h1>Copyright Policy</h1>

      <section className="journal-content-section">
        <h2>1. Policy Statement</h2>

        <p>
          Journal of Physical Science Advances (JPSA) recognises
          copyright as an important means of protecting the
          intellectual contributions of authors and other
          rights holders. The journal expects all submitted
          and published material to comply with applicable
          copyright requirements and intellectual property
          rights.
        </p>

        <p>
          Authors are responsible for ensuring that they
          have the necessary rights to submit and publish
          their manuscripts, including any figures, tables,
          photographs, illustrations, datasets, or other
          material reproduced from external sources.
        </p>

        <p>
          The rights associated with an accepted or published
          article are governed by the applicable publication
          agreement and licence. Authors should review those
          terms carefully before completing the publication
          process.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>2. Copyright Ownership</h2>

        <p>
          Copyright ownership must be established through
          the publication terms agreed between the authors
          and the journal. Unless a separate written
          agreement provides otherwise, authors retain
          ownership of the original work they have created.
        </p>

        <p>
          Authors should ensure that all co-authors have
          the authority to agree to the applicable
          publication terms. Where work has been created
          under employment, institutional, funding, or
          collaborative arrangements, authors should
          confirm that no third-party rights prevent
          publication.
        </p>

        <p>
          Acceptance of a manuscript does not remove
          the obligation to respect copyright owned by
          other individuals, publishers, institutions,
          or organisations.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>3. Rights and Responsibilities of Authors</h2>

        <p>
          Authors should understand the rights they retain
          and the permissions they grant to JPSA when
          their work is accepted for publication.
          Subject to the final publication agreement,
          author rights may include:
        </p>

        <div className="subject-area-grid">
          {authorRights.map((item) => (
            <article className="subject-area-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <p>
          Authors must not grant conflicting rights to
          another publisher or party in a manner that
          prevents them from fulfilling the publication
          agreement with JPSA.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>4. Copyright and Third-Party Material</h2>

        <p>
          Manuscripts may contain material that is not
          owned by the authors, including figures,
          photographs, diagrams, maps, tables, extended
          quotations, and other copyrighted content.
          Authors are responsible for determining
          whether such material can be reproduced
          in the submitted work.
        </p>

        <p>
          Where permission is required, it must be
          obtained from the appropriate rights holder
          before publication. Giving a citation alone
          does not necessarily provide permission
          to reproduce copyrighted material.
        </p>

        <p>Authors should:</p>

        <ul>
          {thirdPartyRequirements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <p>
          Authors should not assume that material
          available on websites, in online databases,
          or in previously published articles is
          free to reproduce.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>5. Licensing and Permitted Reuse</h2>

        <p>
          The licence applicable to a published article
          determines how readers and other users may
          access, share, reproduce, or adapt that work.
          Authors and users should consult the licence
          displayed with the relevant article before
          reusing its content.
        </p>

        <p>
          JPSA should clearly identify the applicable
          licence for each published article and ensure
          that the licence terms are consistent with
          the publication agreement accepted by the
          authors.
        </p>

        <p>
          No specific open-access licence or permission
          for unrestricted commercial reuse should be
          assumed unless it is expressly stated in the
          article's licence and publication terms.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>6. Use and Reproduction of Published Articles</h2>

        <p>
          Reuse of articles published by JPSA must
          comply with the copyright and licensing
          conditions applicable to the individual
          publication. Users should distinguish
          between reading or citing an article and
          reproducing or distributing substantial
          portions of its content.
        </p>

        <div className="subject-area-grid">
          {reuseGuidance.map((item) => (
            <article className="subject-area-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <p>
          Appropriate acknowledgement should be provided
          whenever an article or part of an article is
          reused. Such acknowledgement does not replace
          a permission requirement where permission
          is legally necessary.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>7. Copyright Infringement</h2>

        <p>
          JPSA does not permit the unauthorised
          reproduction or distribution of copyrighted
          material. Authors must ensure that their
          submissions do not infringe the rights of
          other authors, publishers, institutions,
          or rights holders.
        </p>

        <p>
          Where a possible infringement is identified,
          the journal may request evidence of ownership,
          a permission document, clarification from
          the author, or other relevant information.
        </p>

        <p>
          If an infringement is established, the
          journal may request replacement or removal
          of the affected material, suspend publication,
          reject the manuscript, or take appropriate
          post-publication corrective action.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>8. Permissions and Requests for Reuse</h2>

        <p>
          Individuals or organisations seeking to
          reproduce material published by JPSA should
          first review the copyright and licence
          information associated with the article.
        </p>

        <p>
          Where additional permission is required,
          the request should identify the article,
          the specific material to be reproduced,
          the intended use, and the publication or
          platform in which the material will appear.
        </p>

        <p>
          Requests involving material owned by a
          third party should be directed to the
          relevant rights holder.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>9. Copyright Disputes</h2>

        <p>
          Concerns regarding ownership, unauthorised
          reproduction, licensing, or permission
          should be brought to the attention of
          the journal's editorial office with
          sufficient supporting information.
        </p>

        <p>
          The journal may request documentation
          from the relevant parties and examine
          the matter before determining whether
          editorial or publication-related action
          is necessary.
        </p>

        <p>
          Where a dispute cannot be resolved through
          editorial clarification, the matter may
          require consideration by the relevant
          rights holders or appropriate institutional
          or legal authorities.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>10. Editorial Commitment</h2>

        <p>
          JPSA expects authors and users to respect
          intellectual property rights and comply
          with the copyright terms governing submitted
          and published material.
        </p>

        <p>
          The journal aims to maintain clear
          publication terms, protect the rights
          of authors and third-party rights holders,
          and support responsible scholarly
          dissemination.
        </p>
      </section>

      <section className="journal-content-section">
        <h2>Related Policies</h2>

        <p>
          Authors should also consult the journal's{" "}
          <Link href="/policies/authorship-policy">
            Authorship Policy
          </Link>
          ,{" "}
          <Link href="/policies/plagiarism-policy">
            Plagiarism Policy
          </Link>
          , and{" "}
          <Link href="/policies/publication-ethics">
            Publication Ethics Policy
          </Link>.
        </p>
      </section>
    </div>
  );
}
