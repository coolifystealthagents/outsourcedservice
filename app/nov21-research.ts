export const november21ResearchBatch = [
  {
    "slug": "outsourcedservice-client-change-request-catalogue-match",
    "title": "Client change request catalogue match",
    "excerpt": "A measurement protocol for change request catalogue match, with a frozen population, a stored sample, and a dated review.",
    "published": "2026-11-21",
    "publishedDate": "2026-11-21",
    "publishedAt": "2026-11-21",
    "modifiedDate": "2026-11-21",
    "category": "Research",
    "cluster": "Change operations",
    "image": "/thumbnails/november-21/outsourcedservice-client-change-request-catalogue-match.webp",
    "thumbnail": "/thumbnails/november-21/outsourcedservice-client-change-request-catalogue-match.webp",
    "sources": [
      {
        "label": "U.S. Department of Labor, recordkeeping",
        "url": "https://www.dol.gov/agencies/whd/recordkeeping"
      },
      {
        "label": "NIST Cybersecurity Framework",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "FTC data security guidance",
        "url": "https://www.ftc.gov/business-guidance/privacy-security/data-security"
      },
      {
        "label": "U.S. Government Accountability Office, Green Book",
        "url": "https://www.gao.gov/greenbook"
      },
      {
        "label": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business"
      },
      {
        "label": "CISA small business resources",
        "url": "https://www.cisa.gov/audiences/small-and-medium-businesses"
      },
      {
        "label": "IRS recordkeeping",
        "url": "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping"
      },
      {
        "label": "National Archives records management",
        "url": "https://www.archives.gov/records-mgmt"
      },
      {
        "label": "U.S. Bureau of Labor Statistics",
        "url": "https://www.bls.gov/"
      },
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/"
      }
    ],
    "sections": [
      {
        "heading": "Question and decision scope",
        "paragraphs": [
          "The client change request catalogue match study separates the administrative question from the outcome that the service delivery manager owns. The client change request catalogue match protocol fixes the question, the window, and the decision that the service delivery manager will make. The protocol asks whether delivered changes are recorded in the catalogue. The analyst may count whether the change request form exists and whether the approved service entry in the catalogue was updated, but cannot say whether the underlying decision was correct. The review states which records are excluded and why. A clean dashboard is not a population.",
          "A client change request catalogue match protocol begins with the decision, the population, and the limit of the claim. The client change request catalogue match population is built from the change request form and checked against the approved service entry in the catalogue through the client entitlement record. The study turns on whether delivered changes are recorded in the catalogue. The analyst records the source system, the export time, and the version of the query. The service governance lead confirms that the measure can be rebuilt from the saved files. The protocol does not use the count to rank individuals or offices.",
          "The first draft of the client change request catalogue match question is tested against a handful of cases before the full export. The client change request catalogue match definition separates a missing record in the change request form from a pending decision in the approved service entry in the catalogue. The measure must answer whether delivered changes are recorded in the catalogue. The analyst checks whether the change request form and the approved service entry in the catalogue share a stable key. The service delivery manager confirms that the question is narrow enough to answer with the available evidence."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "The client change request catalogue match unit is one case per one change request, not one document, one message, or one person. The client change request catalogue match population is built from the change request form and checked against the approved service entry in the catalogue through the client entitlement record. The study turns on whether delivered changes are recorded in the catalogue. If a case produces several documents, the documents are linked to the same unit. The analyst records the date of the first request and the date of the final administrative action.",
          "The client change request catalogue match denominator is built from the queue export, not from the dashboard total. The client change request catalogue match definition separates a missing record in the change request form from a pending decision in the approved service entry in the catalogue. The measure must answer whether delivered changes are recorded in the catalogue. The analyst removes test records, duplicate requests, and cases outside the window, and records each removal. The service delivery manager confirms that the remaining records belong to the same operational process. The saved query is part of the result.",
          "Every client change request catalogue match case in the population must have a stable identifier, a start event, and an end event in the service management platform. The client change request catalogue match dictionary maps each field to the change request form, the client entitlement record, or the approved service entry in the catalogue. The unresolved point is whether delivered changes are recorded in the catalogue. The analyst excludes records that cannot be tied to the approved service entry in the catalogue and reports the exclusion count. A case that starts before the window but closes inside it is counted once, with the start date noted."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "The client change request catalogue match protocol distinguishes a missing record from a decision that has not yet been made. The client change request catalogue match definition separates a missing record in the change request form from a pending decision in the approved service entry in the catalogue. The measure must answer whether delivered changes are recorded in the catalogue. A missing the change request form is an evidence gap; a pending approval is a different status. The analyst codes each case once and records the code in the dataset. The service delivery manager reviews the coding rule before the full count.",
          "Each client change request catalogue match case is classified by the administrative event that actually occurred, not by the label in the dashboard. The client change request catalogue match dictionary maps each field to the change request form, the client entitlement record, or the approved service entry in the catalogue. The unresolved point is whether delivered changes are recorded in the catalogue. The analyst checks the event against the change request form and the client entitlement record. When the two sources disagree, the case is flagged and excluded from the main rate. The service governance lead reviews the flagged list.",
          "The client change request catalogue match definition states the start event, the end event, and the condition that counts as complete. The client change request catalogue match sample is pulled from the frozen population and stored with the query used to read the service management platform. The sample addresses whether delivered changes are recorded in the catalogue. The start event is the first recorded request in the service management platform; the end event is the update to the approved service entry in the catalogue. A case that pauses for missing evidence is still counted, with the pause noted separately. The definition is written before the data is pulled."
        ]
      },
      {
        "heading": "Evidence dictionary",
        "paragraphs": [
          "Before analysis, the client change request catalogue match team confirms that the evidence dictionary matches the live version of the service management platform. The client change request catalogue match dictionary maps each field to the change request form, the client entitlement record, or the approved service entry in the catalogue. The unresolved point is whether delivered changes are recorded in the catalogue. A field added after the window starts is not backfilled into the old series. The service governance lead checks that the dictionary and the export query agree. The dictionary is versioned with the report.",
          "The client change request catalogue match evidence dictionary is written before the first chart so the chart cannot choose its own definitions. The client change request catalogue match sample is pulled from the frozen population and stored with the query used to read the service management platform. The sample addresses whether delivered changes are recorded in the catalogue. Each entry states the field name, the source, the allowed values, and the treatment of blanks. The analyst keeps the raw export beside the cleaned dataset. The service delivery manager confirms that the dictionary covers the fields used in the decision.",
          "Every field in the client change request catalogue match dataset is traceable to a page, a query, or a system record. The client change request catalogue match report shows the base count, the exclusion list, and the share outside the window. The written question is whether delivered changes are recorded in the catalogue. The dictionary names the difference between a value that was observed and a value that was inferred. The service governance lead checks that the change request form and the approved service entry in the catalogue use the same date convention. Ambiguous fields are excluded rather than guessed."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "For client change request catalogue match, the analyst pulls the population first and selects the sample second. The client change request catalogue match sample is pulled from the frozen population and stored with the query used to read the service management platform. The sample addresses whether delivered changes are recorded in the catalogue. Cases are not added after the first result is known. The service delivery manager confirms that the sample covers the full observation window. The selection log is kept so the sample can be rebuilt.",
          "Each client change request catalogue match sample is paired with a short collection note: who pulled it, when, from which system, and with which query. The client change request catalogue match report shows the base count, the exclusion list, and the share outside the window. The written question is whether delivered changes are recorded in the catalogue. The service governance lead repeats the pull on a few records before the analysis begins. Differences between the two pulls are resolved before the full review. The note is stored with the sample.",
          "The client change request catalogue match sample is large enough to show the shape of the queue without pretending to be a benchmark. The client change request catalogue match protocol fixes the question, the window, and the decision that the service delivery manager will make. The protocol asks whether delivered changes are recorded in the catalogue. The analyst reports the sample size and the confidence limits that the design can support. The service governance lead checks that the sample was not filtered by an outcome variable. A convenience sample is labeled as such."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "The client change request catalogue match analysis uses the same window and definition as the protocol. The client change request catalogue match report shows the base count, the exclusion list, and the share outside the window. The written question is whether delivered changes are recorded in the catalogue. Any deviation is listed in a short methods note. The analyst keeps the working file so a later reviewer can rebuild the result. The service delivery manager signs the interpretation only after the numbers are reconciled.",
          "The client change request catalogue match analysis reports the median, the share outside the window, and the oldest open case. The client change request catalogue match protocol fixes the question, the window, and the decision that the service delivery manager will make. The protocol asks whether delivered changes are recorded in the catalogue. The analyst separates first response from final resolution because the two answer different questions. The service delivery manager reviews the result against the decision question before any recommendation is written. A single average is not used to hide a long tail.",
          "Results for client change request catalogue match are reported with the sample size, the exclusion count, and the observation window on every table. The client change request catalogue match population is built from the change request form and checked against the approved service entry in the catalogue through the client entitlement record. The study turns on whether delivered changes are recorded in the catalogue. The analyst describes association rather than cause, because the design cannot support a causal claim. The service governance lead checks that the chart labels match the definitions. A null result is published as clearly as a positive one."
        ]
      },
      {
        "heading": "Limitations",
        "paragraphs": [
          "Missing records are the largest limitation in the client change request catalogue match study. The client change request catalogue match protocol fixes the question, the window, and the decision that the service delivery manager will make. The protocol asks whether delivered changes are recorded in the catalogue. The analyst reports how many records could not be tied to the approved service entry in the catalogue and how the denominator changed. The service governance lead checks that the missing records were not treated as failures. The result is reported as a range when the missing share is material.",
          "A client change request catalogue match case can be affected by customer availability, source quality, staffing changes, and handoff timing. The client change request catalogue match population is built from the change request form and checked against the approved service entry in the catalogue through the client entitlement record. The study turns on whether delivered changes are recorded in the catalogue. The protocol describes one defined population and does not establish a universal standard. The service governance lead checks that the limitation is written beside the finding. The team repeats the review only after the definition and source are stable.",
          "The client change request catalogue match design does not control for seasonality, queue mix, or staffing changes. The client change request catalogue match definition separates a missing record in the change request form from a pending decision in the approved service entry in the catalogue. The measure must answer whether delivered changes are recorded in the catalogue. The analyst states that the result describes the observed window only. The service delivery manager confirms that the review question is administrative rather than causal. A repeat study uses a new window rather than extending the old one."
        ]
      },
      {
        "heading": "Recordkeeping and repeatability",
        "paragraphs": [
          "The client change request catalogue match record includes the protocol, the export query, the sample, the coding rules, and the final report. The client change request catalogue match population is built from the change request form and checked against the approved service entry in the catalogue through the client entitlement record. The study turns on whether delivered changes are recorded in the catalogue. The service delivery manager confirms that each version is dated and stored together. The service governance lead checks that the result can be rebuilt from the saved files. A report without its query is treated as a draft.",
          "The client change request catalogue match record is written so the next analyst can repeat the study without a meeting. The client change request catalogue match definition separates a missing record in the change request form from a pending decision in the approved service entry in the catalogue. The measure must answer whether delivered changes are recorded in the catalogue. It names the source, the key, the sample rule, and the known gaps. The service governance lead checks that the published numbers match the saved dataset. A correction is dated and linked to the earlier version.",
          "Each client change request catalogue match review closes with a short record of what was examined, what was excluded, and what remains uncertain. The client change request catalogue match dictionary maps each field to the change request form, the client entitlement record, or the approved service entry in the catalogue. The unresolved point is whether delivered changes are recorded in the catalogue. The service delivery manager assigns the next action and the date. The service governance lead confirms that the record does not contain unnecessary personal data. The report and the query stay together."
        ]
      }
    ],
    "headlineStat": "A defined sample, not a verdict",
    "body": [
      "A measurement protocol for change request catalogue match, with a frozen population and a dated review.",
      "The record should let a second reviewer rebuild the comparison from change request form and the approved service entry in the catalogue."
    ],
    "methodology": "This protocol applies public control guidance to change request catalogue match and states its limits beside the count.",
    "related": [],
    "faq": [
      {
        "question": "How is change request catalogue match measured?",
        "answer": "With a frozen population, a stored sample, and a dated review."
      },
      {
        "question": "What is excluded?",
        "answer": "Client judgments, forecasts, and claims that cannot be rebuilt from the approved service entry in the catalogue are outside the count."
      }
    ]
  },
  {
    "slug": "outsourcedservice-service-desk-handover-completeness",
    "title": "Service desk handover completeness",
    "excerpt": "A measurement protocol for service desk handover completeness, with a frozen population, a stored sample, and a dated review.",
    "published": "2026-11-21",
    "publishedDate": "2026-11-21",
    "publishedAt": "2026-11-21",
    "modifiedDate": "2026-11-21",
    "category": "Research",
    "cluster": "Handover operations",
    "image": "/thumbnails/november-21/outsourcedservice-service-desk-handover-completeness.webp",
    "thumbnail": "/thumbnails/november-21/outsourcedservice-service-desk-handover-completeness.webp",
    "sources": [
      {
        "label": "U.S. Department of Labor, recordkeeping",
        "url": "https://www.dol.gov/agencies/whd/recordkeeping"
      },
      {
        "label": "NIST Cybersecurity Framework",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "FTC data security guidance",
        "url": "https://www.ftc.gov/business-guidance/privacy-security/data-security"
      },
      {
        "label": "U.S. Government Accountability Office, Green Book",
        "url": "https://www.gao.gov/greenbook"
      },
      {
        "label": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business"
      },
      {
        "label": "CISA small business resources",
        "url": "https://www.cisa.gov/audiences/small-and-medium-businesses"
      },
      {
        "label": "IRS recordkeeping",
        "url": "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping"
      },
      {
        "label": "National Archives records management",
        "url": "https://www.archives.gov/records-mgmt"
      },
      {
        "label": "U.S. Bureau of Labor Statistics",
        "url": "https://www.bls.gov/"
      },
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/"
      }
    ],
    "sections": [
      {
        "heading": "Question and decision scope",
        "paragraphs": [
          "The first draft of the service desk handover completeness question is tested against a handful of cases before the full export. The service desk handover completeness protocol fixes the question, the window, and the decision that the service delivery manager will make. The protocol asks whether handovers carry enough evidence for the client brief. The analyst checks whether the shift handover note and the open incident list for the client share a stable key. The service delivery manager confirms that the question is narrow enough to answer with the available evidence. Any change to the definition is dated and applied to a new draw.",
          "A service desk handover completeness protocol begins with the decision, the population, and the limit of the claim. The service desk handover completeness population is built from the shift handover note and checked against the open incident list for the client through the client entitlement record. The study turns on whether handovers carry enough evidence for the client brief. The analyst records the source system, the export time, and the version of the query. The service governance lead confirms that the measure can be rebuilt from the saved files. The protocol does not use the count to rank individuals or offices.",
          "The service desk handover completeness review is designed to answer one question about the administrative record, not to prove a business outcome. The service desk handover completeness definition separates a missing record in the shift handover note from a pending decision in the open incident list for the client. The measure must answer whether handovers carry enough evidence for the client brief. The analyst names the population, the unit, the window, and the source of the timestamps. The service governance lead checks that the question does not require a judgment reserved for the service delivery manager. The result is reported with its limits beside it."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "The service desk handover completeness unit is one case per one handover, not one document, one message, or one person. The service desk handover completeness population is built from the shift handover note and checked against the open incident list for the client through the client entitlement record. The study turns on whether handovers carry enough evidence for the client brief. If a case produces several documents, the documents are linked to the same unit. The analyst records the date of the first request and the date of the final administrative action. The service delivery manager confirms that the unit matches the decision the review is meant to inform.",
          "Population rules for service desk handover completeness name the intake point, the closing point, and the records excluded at each end. The service desk handover completeness definition separates a missing record in the shift handover note from a pending decision in the open incident list for the client. The measure must answer whether handovers carry enough evidence for the client brief. The analyst checks that the shift handover note and the client entitlement record use the same identifier before joining them. Cases that cannot be matched are held in a separate list rather than dropped. The service governance lead reviews the list before the denominator is fixed.",
          "The service desk handover completeness population is all shift handovers in the window, and the unit is one handover. The service desk handover completeness dictionary maps each field to the shift handover note, the client entitlement record, or the open incident list for the client. The unresolved point is whether handovers carry enough evidence for the client brief. Cases enter the population on the date the request is first recorded, not on the date the file is cleaned. Duplicate records are merged only after the stable key is confirmed, and the originals stay linked. The service governance lead checks the inclusion rule against a hand-counted sample."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Each service desk handover completeness case is classified by the administrative event that actually occurred, not by the label in the dashboard. The service desk handover completeness definition separates a missing record in the shift handover note from a pending decision in the open incident list for the client. The measure must answer whether handovers carry enough evidence for the client brief. The analyst checks the event against the shift handover note and the client entitlement record. When the two sources disagree, the case is flagged and excluded from the main rate. The service governance lead reviews the flagged list.",
          "The service desk handover completeness measure is stated as a median and as a share outside the window, not as a single average. The service desk handover completeness dictionary maps each field to the shift handover note, the client entitlement record, or the open incident list for the client. The unresolved point is whether handovers carry enough evidence for the client brief. The analyst records the timestamp source for each event and notes any clock differences between systems. A change to the definition creates a new series rather than being mixed into the old one. The service delivery manager confirms that the measure answers the stated question.",
          "Definitions for service desk handover completeness use the same labels as the queue and the review. The service desk handover completeness sample is pulled from the frozen population and stored with the query used to read the service management platform. The sample addresses whether handovers carry enough evidence for the client brief. The analyst avoids words like timely or complete unless the condition is written down. The service governance lead checks that the measure does not depend on a field that is optional in the service management platform. The definition is dated and stored with the export."
        ]
      },
      {
        "heading": "Evidence dictionary",
        "paragraphs": [
          "The service desk handover completeness dictionary links each measure to the field that proves it. The service desk handover completeness dictionary maps each field to the shift handover note, the client entitlement record, or the open incident list for the client. The unresolved point is whether handovers carry enough evidence for the client brief. A count of complete records requires the shift handover note to be present; a count of verified closes requires the open incident list for the client to match the approval. The analyst does not use one field as a substitute for another. The service delivery manager reviews any field that changes during the window.",
          "The service desk handover completeness evidence dictionary is written before the first chart so the chart cannot choose its own definitions. The service desk handover completeness sample is pulled from the frozen population and stored with the query used to read the service management platform. The sample addresses whether handovers carry enough evidence for the client brief. Each entry states the field name, the source, the allowed values, and the treatment of blanks. The analyst keeps the raw export beside the cleaned dataset. The service delivery manager confirms that the dictionary covers the fields used in the decision.",
          "For service desk handover completeness, a missing value is coded as missing, with a reason, rather than left blank. The service desk handover completeness report shows the base count, the exclusion list, and the share outside the window. The written question is whether handovers carry enough evidence for the client brief. The analyst distinguishes not applicable, not collected, and not yet decided. The service governance lead checks a sample of coded records against the shift handover note. The coding rules are stored with the dataset."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "The service desk handover completeness sample includes records from every channel in the population, even when one channel supplies most of the volume. The service desk handover completeness sample is pulled from the frozen population and stored with the query used to read the service management platform. The sample addresses whether handovers carry enough evidence for the client brief. The analyst records the channel mix beside the result. The service delivery manager confirms that no channel was excluded because its records were harder to retrieve. The exclusion list is published with the sample.",
          "Each service desk handover completeness sample is paired with a short collection note: who pulled it, when, from which system, and with which query. The service desk handover completeness report shows the base count, the exclusion list, and the share outside the window. The written question is whether handovers carry enough evidence for the client brief. The service governance lead repeats the pull on a few records before the analysis begins. Differences between the two pulls are resolved before the full review. The note is stored with the sample.",
          "The service desk handover completeness sample is drawn from the frozen population with a documented rule, not from cases that are easy to find. The service desk handover completeness protocol fixes the question, the window, and the decision that the service delivery manager will make. The protocol asks whether handovers carry enough evidence for the client brief. The analyst records the sample size, the selection method, and the seed or interval used. The service governance lead checks that the sample includes a routine case, a reopened case, and a missing-evidence case. The sample is stored with the export."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Results for service desk handover completeness are reported with the sample size, the exclusion count, and the observation window on every table. The service desk handover completeness report shows the base count, the exclusion list, and the share outside the window. The written question is whether handovers carry enough evidence for the client brief. The analyst describes association rather than cause, because the design cannot support a causal claim. The service governance lead checks that the chart labels match the definitions. A null result is published as clearly as a positive one.",
          "The service desk handover completeness analysis reports the median, the share outside the window, and the oldest open case. The service desk handover completeness protocol fixes the question, the window, and the decision that the service delivery manager will make. The protocol asks whether handovers carry enough evidence for the client brief. The analyst separates first response from final resolution because the two answer different questions. The service delivery manager reviews the result against the decision question before any recommendation is written. A single average is not used to hide a long tail.",
          "The service desk handover completeness analysis uses the same window and definition as the protocol. The service desk handover completeness population is built from the shift handover note and checked against the open incident list for the client through the client entitlement record. The study turns on whether handovers carry enough evidence for the client brief. Any deviation is listed in a short methods note. The analyst keeps the working file so a later reviewer can rebuild the result. The service delivery manager signs the interpretation only after the numbers are reconciled."
        ]
      },
      {
        "heading": "Limitations",
        "paragraphs": [
          "A service desk handover completeness case can be affected by customer availability, source quality, staffing changes, and handoff timing. The service desk handover completeness protocol fixes the question, the window, and the decision that the service delivery manager will make. The protocol asks whether handovers carry enough evidence for the client brief. The protocol describes one defined population and does not establish a universal standard. The service governance lead checks that the limitation is written beside the finding. The team repeats the review only after the definition and source are stable.",
          "The service desk handover completeness result is limited by the quality of the shift handover note, the availability of the open incident list for the client, and the stability of the recording rule. The service desk handover completeness population is built from the shift handover note and checked against the open incident list for the client through the client entitlement record. The study turns on whether handovers carry enough evidence for the client brief. The report states these limits before presenting a rate. The service delivery manager confirms that the limitation does not invalidate the administrative use of the count. The result is not a benchmark for other teams.",
          "Missing records are the largest limitation in the service desk handover completeness study. The service desk handover completeness definition separates a missing record in the shift handover note from a pending decision in the open incident list for the client. The measure must answer whether handovers carry enough evidence for the client brief. The analyst reports how many records could not be tied to the open incident list for the client and how the denominator changed. The service governance lead checks that the missing records were not treated as failures. The result is reported as a range when the missing share is material."
        ]
      },
      {
        "heading": "Recordkeeping and repeatability",
        "paragraphs": [
          "For service desk handover completeness, the working file separates the raw export, the cleaned dataset, and the published table. The service desk handover completeness population is built from the shift handover note and checked against the open incident list for the client through the client entitlement record. The study turns on whether handovers carry enough evidence for the client brief. The analyst records every transformation and the person who approved it. The service delivery manager confirms that the report names the observation window and the exclusions. The file is retained under the same rule as the source record.",
          "Version control for service desk handover completeness starts with the protocol and ends with the published table. The service desk handover completeness definition separates a missing record in the shift handover note from a pending decision in the open incident list for the client. The measure must answer whether handovers carry enough evidence for the client brief. The analyst labels each file with the window and the run date. The service delivery manager confirms that the version in the report is the version in the archive. A later change creates a new version rather than editing history.",
          "The service desk handover completeness package includes a plain-language note for the team that supplied the records. The service desk handover completeness dictionary maps each field to the shift handover note, the client entitlement record, or the open incident list for the client. The unresolved point is whether handovers carry enough evidence for the client brief. The note states what was counted, what was not counted, and how the result will be used. The service delivery manager approves the note before it is shared. The service governance lead checks that the note does not overstate the finding."
        ]
      }
    ],
    "headlineStat": "A defined sample, not a verdict",
    "body": [
      "A measurement protocol for service desk handover completeness, with a frozen population and a dated review.",
      "The record should let a second reviewer rebuild the comparison from shift handover note and the open incident list for the client."
    ],
    "methodology": "This protocol applies public control guidance to service desk handover completeness and states its limits beside the count.",
    "related": [],
    "faq": [
      {
        "question": "How is service desk handover completeness measured?",
        "answer": "With a frozen population, a stored sample, and a dated review."
      },
      {
        "question": "What is excluded?",
        "answer": "Client judgments, forecasts, and claims that cannot be rebuilt from the open incident list for the client are outside the count."
      }
    ]
  },
  {
    "slug": "outsourcedservice-vendor-onboarding-invoice-readiness",
    "title": "Vendor onboarding invoice readiness",
    "excerpt": "A measurement protocol for vendor onboarding invoice readiness, with a frozen population, a stored sample, and a dated review.",
    "published": "2026-11-21",
    "publishedDate": "2026-11-21",
    "publishedAt": "2026-11-21",
    "modifiedDate": "2026-11-21",
    "category": "Research",
    "cluster": "Vendor operations",
    "image": "/thumbnails/november-21/outsourcedservice-vendor-onboarding-invoice-readiness.webp",
    "thumbnail": "/thumbnails/november-21/outsourcedservice-vendor-onboarding-invoice-readiness.webp",
    "sources": [
      {
        "label": "U.S. Department of Labor, recordkeeping",
        "url": "https://www.dol.gov/agencies/whd/recordkeeping"
      },
      {
        "label": "NIST Cybersecurity Framework",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "FTC data security guidance",
        "url": "https://www.ftc.gov/business-guidance/privacy-security/data-security"
      },
      {
        "label": "U.S. Government Accountability Office, Green Book",
        "url": "https://www.gao.gov/greenbook"
      },
      {
        "label": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business"
      },
      {
        "label": "CISA small business resources",
        "url": "https://www.cisa.gov/audiences/small-and-medium-businesses"
      },
      {
        "label": "IRS recordkeeping",
        "url": "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping"
      },
      {
        "label": "National Archives records management",
        "url": "https://www.archives.gov/records-mgmt"
      },
      {
        "label": "U.S. Bureau of Labor Statistics",
        "url": "https://www.bls.gov/"
      },
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/"
      }
    ],
    "sections": [
      {
        "heading": "Question and decision scope",
        "paragraphs": [
          "The vendor onboarding invoice readiness review is designed to answer one question about the administrative record, not to prove a business outcome. The vendor onboarding invoice readiness protocol fixes the question, the window, and the decision that the service delivery manager will make. The protocol asks whether vendor records are complete at first invoice. The analyst names the population, the unit, the window, and the source of the timestamps. The service governance lead checks that the question does not require a judgment reserved for the service delivery manager. The result is reported with its limits beside it.",
          "The vendor onboarding invoice readiness study separates the administrative question from the outcome that the service delivery manager owns. The vendor onboarding invoice readiness population is built from the vendor onboarding checklist and checked against the vendor record in the procurement system through the client entitlement record. The study turns on whether vendor records are complete at first invoice. The analyst may count whether the vendor onboarding checklist exists and whether the vendor record in the procurement system was updated, but cannot say whether the underlying decision was correct. The review states which records are excluded and why. A clean dashboard is not a population.",
          "A vendor onboarding invoice readiness protocol begins with the decision, the population, and the limit of the claim. The vendor onboarding invoice readiness definition separates a missing record in the vendor onboarding checklist from a pending decision in the vendor record in the procurement system. The measure must answer whether vendor records are complete at first invoice. The analyst records the source system, the export time, and the version of the query. The service governance lead confirms that the measure can be rebuilt from the saved files. The protocol does not use the count to rank individuals or offices."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "The vendor onboarding invoice readiness population is all new vendors submitting a first invoice, and the unit is one vendor. The vendor onboarding invoice readiness population is built from the vendor onboarding checklist and checked against the vendor record in the procurement system through the client entitlement record. The study turns on whether vendor records are complete at first invoice. Cases enter the population on the date the request is first recorded, not on the date the file is cleaned. Duplicate records are merged only after the stable key is confirmed, and the originals stay linked. The service governance lead checks the inclusion rule against a hand-counted sample.",
          "Population rules for vendor onboarding invoice readiness name the intake point, the closing point, and the records excluded at each end. The vendor onboarding invoice readiness definition separates a missing record in the vendor onboarding checklist from a pending decision in the vendor record in the procurement system. The measure must answer whether vendor records are complete at first invoice. The analyst checks that the vendor onboarding checklist and the client entitlement record use the same identifier before joining them. Cases that cannot be matched are held in a separate list rather than dropped. The service governance lead reviews the list before the denominator is fixed.",
          "The vendor onboarding invoice readiness denominator is built from the queue export, not from the dashboard total. The vendor onboarding invoice readiness dictionary maps each field to the vendor onboarding checklist, the client entitlement record, or the vendor record in the procurement system. The unresolved point is whether vendor records are complete at first invoice. The analyst removes test records, duplicate requests, and cases outside the window, and records each removal. The service delivery manager confirms that the remaining records belong to the same operational process. The saved query is part of the result."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Each vendor onboarding invoice readiness case is classified by the administrative event that actually occurred, not by the label in the dashboard. The vendor onboarding invoice readiness definition separates a missing record in the vendor onboarding checklist from a pending decision in the vendor record in the procurement system. The measure must answer whether vendor records are complete at first invoice. The analyst checks the event against the vendor onboarding checklist and the client entitlement record. When the two sources disagree, the case is flagged and excluded from the main rate. The service governance lead reviews the flagged list.",
          "For vendor onboarding invoice readiness, completeness means that the vendor onboarding checklist is present, dated, and linked to the vendor record in the procurement system. The vendor onboarding invoice readiness dictionary maps each field to the vendor onboarding checklist, the client entitlement record, or the vendor record in the procurement system. The unresolved point is whether vendor records are complete at first invoice. It does not mean that the underlying decision was correct. The analyst reports the definition beside the count so a later reader can see what was measured. The service governance lead checks the definition against two hand-counted cases.",
          "Definitions for vendor onboarding invoice readiness use the same labels as the queue and the review. The vendor onboarding invoice readiness sample is pulled from the frozen population and stored with the query used to read the service management platform. The sample addresses whether vendor records are complete at first invoice. The analyst avoids words like timely or complete unless the condition is written down. The service governance lead checks that the measure does not depend on a field that is optional in the service management platform. The definition is dated and stored with the export."
        ]
      },
      {
        "heading": "Evidence dictionary",
        "paragraphs": [
          "The vendor onboarding invoice readiness evidence dictionary lists each field, its source system, its expected format, and the person who owns it. The vendor onboarding invoice readiness dictionary maps each field to the vendor onboarding checklist, the client entitlement record, or the vendor record in the procurement system. The unresolved point is whether vendor records are complete at first invoice. The vendor onboarding checklist supplies the request date; the vendor record in the procurement system supplies the close date; the client entitlement record is used to test the join. The analyst records the export time beside every field that can change. A field without an owner is treated as unreliable.",
          "Before analysis, the vendor onboarding invoice readiness team confirms that the evidence dictionary matches the live version of the service management platform. The vendor onboarding invoice readiness sample is pulled from the frozen population and stored with the query used to read the service management platform. The sample addresses whether vendor records are complete at first invoice. A field added after the window starts is not backfilled into the old series. The service governance lead checks that the dictionary and the export query agree. The dictionary is versioned with the report.",
          "The vendor onboarding invoice readiness dictionary links each measure to the field that proves it. The vendor onboarding invoice readiness report shows the base count, the exclusion list, and the share outside the window. The written question is whether vendor records are complete at first invoice. A count of complete records requires the vendor onboarding checklist to be present; a count of verified closes requires the vendor record in the procurement system to match the approval. The analyst does not use one field as a substitute for another. The service delivery manager reviews any field that changes during the window."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "The vendor onboarding invoice readiness sample is large enough to show the shape of the queue without pretending to be a benchmark. The vendor onboarding invoice readiness sample is pulled from the frozen population and stored with the query used to read the service management platform. The sample addresses whether vendor records are complete at first invoice. The analyst reports the sample size and the confidence limits that the design can support. The service governance lead checks that the sample was not filtered by an outcome variable. A convenience sample is labeled as such.",
          "The vendor onboarding invoice readiness sample includes records from every channel in the population, even when one channel supplies most of the volume. The vendor onboarding invoice readiness report shows the base count, the exclusion list, and the share outside the window. The written question is whether vendor records are complete at first invoice. The analyst records the channel mix beside the result. The service delivery manager confirms that no channel was excluded because its records were harder to retrieve. The exclusion list is published with the sample.",
          "The vendor onboarding invoice readiness sample is drawn from the frozen population with a documented rule, not from cases that are easy to find. The vendor onboarding invoice readiness protocol fixes the question, the window, and the decision that the service delivery manager will make. The protocol asks whether vendor records are complete at first invoice. The analyst records the sample size, the selection method, and the seed or interval used. The service governance lead checks that the sample includes a routine case, a reopened case, and a missing-evidence case. The sample is stored with the export."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "The vendor onboarding invoice readiness analysis uses the same window and definition as the protocol. The vendor onboarding invoice readiness report shows the base count, the exclusion list, and the share outside the window. The written question is whether vendor records are complete at first invoice. Any deviation is listed in a short methods note. The analyst keeps the working file so a later reviewer can rebuild the result. The service delivery manager signs the interpretation only after the numbers are reconciled.",
          "The vendor onboarding invoice readiness report ends with the limit of the claim and the next question. The vendor onboarding invoice readiness protocol fixes the question, the window, and the decision that the service delivery manager will make. The protocol asks whether vendor records are complete at first invoice. The analyst states what the data cannot show and which records were excluded. The service governance lead checks that the conclusion does not exceed the design. The report is dated and versioned.",
          "The vendor onboarding invoice readiness report separates what was observed from what the team believes caused it. The vendor onboarding invoice readiness population is built from the vendor onboarding checklist and checked against the vendor record in the procurement system through the client entitlement record. The study turns on whether vendor records are complete at first invoice. The analyst notes any change in the process, the system, or the recording rule during the window. The service delivery manager confirms that the result does not rank individuals. The next review date is set before the report is shared."
        ]
      },
      {
        "heading": "Limitations",
        "paragraphs": [
          "A vendor onboarding invoice readiness case can be affected by customer availability, source quality, staffing changes, and handoff timing. The vendor onboarding invoice readiness protocol fixes the question, the window, and the decision that the service delivery manager will make. The protocol asks whether vendor records are complete at first invoice. The protocol describes one defined population and does not establish a universal standard. The service governance lead checks that the limitation is written beside the finding. The team repeats the review only after the definition and source are stable.",
          "The vendor onboarding invoice readiness review cannot separate a change in the work from a change in how the work is recorded. The vendor onboarding invoice readiness population is built from the vendor onboarding checklist and checked against the vendor record in the procurement system through the client entitlement record. The study turns on whether vendor records are complete at first invoice. The analyst names that risk in the methods note. The service delivery manager confirms that the result will not be used to evaluate an individual. The limitation section is published with the report, not added later.",
          "Missing records are the largest limitation in the vendor onboarding invoice readiness study. The vendor onboarding invoice readiness definition separates a missing record in the vendor onboarding checklist from a pending decision in the vendor record in the procurement system. The measure must answer whether vendor records are complete at first invoice. The analyst reports how many records could not be tied to the vendor record in the procurement system and how the denominator changed. The service governance lead checks that the missing records were not treated as failures. The result is reported as a range when the missing share is material."
        ]
      },
      {
        "heading": "Recordkeeping and repeatability",
        "paragraphs": [
          "The vendor onboarding invoice readiness record is written so the next analyst can repeat the study without a meeting. The vendor onboarding invoice readiness population is built from the vendor onboarding checklist and checked against the vendor record in the procurement system through the client entitlement record. The study turns on whether vendor records are complete at first invoice. It names the source, the key, the sample rule, and the known gaps. The service governance lead checks that the published numbers match the saved dataset. A correction is dated and linked to the earlier version.",
          "Each vendor onboarding invoice readiness review closes with a short record of what was examined, what was excluded, and what remains uncertain. The vendor onboarding invoice readiness definition separates a missing record in the vendor onboarding checklist from a pending decision in the vendor record in the procurement system. The measure must answer whether vendor records are complete at first invoice. The service delivery manager assigns the next action and the date. The service governance lead confirms that the record does not contain unnecessary personal data. The report and the query stay together.",
          "The vendor onboarding invoice readiness record includes the protocol, the export query, the sample, the coding rules, and the final report. The vendor onboarding invoice readiness dictionary maps each field to the vendor onboarding checklist, the client entitlement record, or the vendor record in the procurement system. The unresolved point is whether vendor records are complete at first invoice. The service delivery manager confirms that each version is dated and stored together. The service governance lead checks that the result can be rebuilt from the saved files. A report without its query is treated as a draft."
        ]
      }
    ],
    "headlineStat": "A defined sample, not a verdict",
    "body": [
      "A measurement protocol for vendor onboarding invoice readiness, with a frozen population and a dated review.",
      "The record should let a second reviewer rebuild the comparison from vendor onboarding checklist and the vendor record in the procurement system."
    ],
    "methodology": "This protocol applies public control guidance to vendor onboarding invoice readiness and states its limits beside the count.",
    "related": [],
    "faq": [
      {
        "question": "How is vendor onboarding invoice readiness measured?",
        "answer": "With a frozen population, a stored sample, and a dated review."
      },
      {
        "question": "What is excluded?",
        "answer": "Client judgments, forecasts, and claims that cannot be rebuilt from the vendor record in the procurement system are outside the count."
      }
    ]
  },
  {
    "slug": "outsourcedservice-knowledge-base-retirement-coverage",
    "title": "Knowledge base retirement coverage",
    "excerpt": "A measurement protocol for knowledge retirement coverage, with a frozen population, a stored sample, and a dated review.",
    "published": "2026-11-21",
    "publishedDate": "2026-11-21",
    "publishedAt": "2026-11-21",
    "modifiedDate": "2026-11-21",
    "category": "Research",
    "cluster": "Knowledge operations",
    "image": "/thumbnails/november-21/outsourcedservice-knowledge-base-retirement-coverage.webp",
    "thumbnail": "/thumbnails/november-21/outsourcedservice-knowledge-base-retirement-coverage.webp",
    "sources": [
      {
        "label": "U.S. Department of Labor, recordkeeping",
        "url": "https://www.dol.gov/agencies/whd/recordkeeping"
      },
      {
        "label": "NIST Cybersecurity Framework",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "FTC data security guidance",
        "url": "https://www.ftc.gov/business-guidance/privacy-security/data-security"
      },
      {
        "label": "U.S. Government Accountability Office, Green Book",
        "url": "https://www.gao.gov/greenbook"
      },
      {
        "label": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business"
      },
      {
        "label": "CISA small business resources",
        "url": "https://www.cisa.gov/audiences/small-and-medium-businesses"
      },
      {
        "label": "IRS recordkeeping",
        "url": "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping"
      },
      {
        "label": "National Archives records management",
        "url": "https://www.archives.gov/records-mgmt"
      },
      {
        "label": "U.S. Bureau of Labor Statistics",
        "url": "https://www.bls.gov/"
      },
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/"
      }
    ],
    "sections": [
      {
        "heading": "Question and decision scope",
        "paragraphs": [
          "The knowledge base retirement coverage study separates the administrative question from the outcome that the service delivery manager owns. The knowledge base retirement coverage protocol fixes the question, the window, and the decision that the service delivery manager will make. The protocol asks whether retired articles are removed from active scripts. The analyst may count whether the retirement request exists and whether the article status in the service knowledge base was updated, but cannot say whether the underlying decision was correct. The review states which records are excluded and why. A clean dashboard is not a population.",
          "The knowledge base retirement coverage review starts with a decision question, a defined population, and a stated observation window. The knowledge base retirement coverage population is built from the retirement request and checked against the article status in the service knowledge base through the client entitlement record. The study turns on whether retired articles are removed from active scripts. The analyst writes what the count will inform before pulling any records from the service management platform. The service delivery manager confirms that the question is administrative rather than a judgment about the article status in the service knowledge base.",
          "Before collecting the retirement request, the team writes the knowledge base retirement coverage question in one sentence and names the decision it supports. The knowledge base retirement coverage definition separates a missing record in the retirement request from a pending decision in the article status in the service knowledge base. The measure must answer whether retired articles are removed from active scripts. The unit is defined as one article, not as one email or one document. The service governance lead reviews the scope to ensure that the count does not drift into a professional judgment. The window is fixed so late-arriving cases cannot change the denominator."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "Every knowledge base retirement coverage case in the population must have a stable identifier, a start event, and an end event in the service management platform. The knowledge base retirement coverage population is built from the retirement request and checked against the article status in the service knowledge base through the client entitlement record. The study turns on whether retired articles are removed from active scripts. The analyst excludes records that cannot be tied to the article status in the service knowledge base and reports the exclusion count. A case that starts before the window but closes inside it is counted once, with the start date noted.",
          "The knowledge base retirement coverage population is all retirement requests in the release cycle, and the unit is one article. The knowledge base retirement coverage definition separates a missing record in the retirement request from a pending decision in the article status in the service knowledge base. The measure must answer whether retired articles are removed from active scripts. Cases enter the population on the date the request is first recorded, not on the date the file is cleaned. Duplicate records are merged only after the stable key is confirmed, and the originals stay linked. The service governance lead checks the inclusion rule against a hand-counted sample.",
          "The knowledge base retirement coverage unit is one case per one article, not one document, one message, or one person. The knowledge base retirement coverage dictionary maps each field to the retirement request, the client entitlement record, or the article status in the service knowledge base. The unresolved point is whether retired articles are removed from active scripts. If a case produces several documents, the documents are linked to the same unit. The analyst records the date of the first request and the date of the final administrative action. The service delivery manager confirms that the unit matches the decision the review is meant to inform."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "For knowledge base retirement coverage, completeness means that the retirement request is present, dated, and linked to the article status in the service knowledge base. The knowledge base retirement coverage definition separates a missing record in the retirement request from a pending decision in the article status in the service knowledge base. The measure must answer whether retired articles are removed from active scripts. It does not mean that the underlying decision was correct. The analyst reports the definition beside the count so a later reader can see what was measured. The service governance lead checks the definition against two hand-counted cases.",
          "The knowledge base retirement coverage measure is stated as a median and as a share outside the window, not as a single average. The knowledge base retirement coverage dictionary maps each field to the retirement request, the client entitlement record, or the article status in the service knowledge base. The unresolved point is whether retired articles are removed from active scripts. The analyst records the timestamp source for each event and notes any clock differences between systems. A change to the definition creates a new series rather than being mixed into the old one. The service delivery manager confirms that the measure answers the stated question.",
          "The knowledge base retirement coverage definition states the start event, the end event, and the condition that counts as complete. The knowledge base retirement coverage sample is pulled from the frozen population and stored with the query used to read the service management platform. The sample addresses whether retired articles are removed from active scripts. The start event is the first recorded request in the service management platform; the end event is the update to the article status in the service knowledge base. A case that pauses for missing evidence is still counted, with the pause noted separately. The definition is written before the data is pulled."
        ]
      },
      {
        "heading": "Evidence dictionary",
        "paragraphs": [
          "The knowledge base retirement coverage dictionary links each measure to the field that proves it. The knowledge base retirement coverage dictionary maps each field to the retirement request, the client entitlement record, or the article status in the service knowledge base. The unresolved point is whether retired articles are removed from active scripts. A count of complete records requires the retirement request to be present; a count of verified closes requires the article status in the service knowledge base to match the approval. The analyst does not use one field as a substitute for another. The service delivery manager reviews any field that changes during the window.",
          "Every field in the knowledge base retirement coverage dataset is traceable to a page, a query, or a system record. The knowledge base retirement coverage sample is pulled from the frozen population and stored with the query used to read the service management platform. The sample addresses whether retired articles are removed from active scripts. The dictionary names the difference between a value that was observed and a value that was inferred. The service governance lead checks that the retirement request and the article status in the service knowledge base use the same date convention. Ambiguous fields are excluded rather than guessed.",
          "The knowledge base retirement coverage evidence dictionary lists each field, its source system, its expected format, and the person who owns it. The knowledge base retirement coverage report shows the base count, the exclusion list, and the share outside the window. The written question is whether retired articles are removed from active scripts. The retirement request supplies the request date; the article status in the service knowledge base supplies the close date; the client entitlement record is used to test the join. The analyst records the export time beside every field that can change. A field without an owner is treated as unreliable."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Sampling for knowledge base retirement coverage uses the stable key to avoid counting the same case twice. The knowledge base retirement coverage sample is pulled from the frozen population and stored with the query used to read the service management platform. The sample addresses whether retired articles are removed from active scripts. The analyst checks for duplicate requests before selection and records any merge. The retirement request is reviewed for the sampled cases only, while the full population is used for the denominator. The two counts are reported separately.",
          "The knowledge base retirement coverage sample includes records from every channel in the population, even when one channel supplies most of the volume. The knowledge base retirement coverage report shows the base count, the exclusion list, and the share outside the window. The written question is whether retired articles are removed from active scripts. The analyst records the channel mix beside the result. The service delivery manager confirms that no channel was excluded because its records were harder to retrieve. The exclusion list is published with the sample.",
          "The knowledge base retirement coverage sample is drawn from the frozen population with a documented rule, not from cases that are easy to find. The knowledge base retirement coverage protocol fixes the question, the window, and the decision that the service delivery manager will make. The protocol asks whether retired articles are removed from active scripts. The analyst records the sample size, the selection method, and the seed or interval used. The service governance lead checks that the sample includes a routine case, a reopened case, and a missing-evidence case. The sample is stored with the export."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "The knowledge base retirement coverage analysis reports the median, the share outside the window, and the oldest open case. The knowledge base retirement coverage report shows the base count, the exclusion list, and the share outside the window. The written question is whether retired articles are removed from active scripts. The analyst separates first response from final resolution because the two answer different questions. The service delivery manager reviews the result against the decision question before any recommendation is written. A single average is not used to hide a long tail.",
          "Results for knowledge base retirement coverage are reported with the sample size, the exclusion count, and the observation window on every table. The knowledge base retirement coverage protocol fixes the question, the window, and the decision that the service delivery manager will make. The protocol asks whether retired articles are removed from active scripts. The analyst describes association rather than cause, because the design cannot support a causal claim. The service governance lead checks that the chart labels match the definitions. A null result is published as clearly as a positive one.",
          "For knowledge base retirement coverage, the analyst reports the count and the rate together so a reader can see the size of the base. The knowledge base retirement coverage population is built from the retirement request and checked against the article status in the service knowledge base through the client entitlement record. The study turns on whether retired articles are removed from active scripts. Cells with very small counts are grouped or suppressed. The service governance lead checks that the denominator is visible on every percentage. The report names the records that could not be retrieved."
        ]
      },
      {
        "heading": "Limitations",
        "paragraphs": [
          "The knowledge base retirement coverage result is limited by the quality of the retirement request, the availability of the article status in the service knowledge base, and the stability of the recording rule. The knowledge base retirement coverage protocol fixes the question, the window, and the decision that the service delivery manager will make. The protocol asks whether retired articles are removed from active scripts. The report states these limits before presenting a rate. The service delivery manager confirms that the limitation does not invalidate the administrative use of the count. The result is not a benchmark for other teams.",
          "The knowledge base retirement coverage review cannot separate a change in the work from a change in how the work is recorded. The knowledge base retirement coverage population is built from the retirement request and checked against the article status in the service knowledge base through the client entitlement record. The study turns on whether retired articles are removed from active scripts. The analyst names that risk in the methods note. The service delivery manager confirms that the result will not be used to evaluate an individual. The limitation section is published with the report, not added later.",
          "The knowledge base retirement coverage design does not control for seasonality, queue mix, or staffing changes. The knowledge base retirement coverage definition separates a missing record in the retirement request from a pending decision in the article status in the service knowledge base. The measure must answer whether retired articles are removed from active scripts. The analyst states that the result describes the observed window only. The service delivery manager confirms that the review question is administrative rather than causal. A repeat study uses a new window rather than extending the old one."
        ]
      },
      {
        "heading": "Recordkeeping and repeatability",
        "paragraphs": [
          "Each knowledge base retirement coverage review closes with a short record of what was examined, what was excluded, and what remains uncertain. The knowledge base retirement coverage population is built from the retirement request and checked against the article status in the service knowledge base through the client entitlement record. The study turns on whether retired articles are removed from active scripts. The service delivery manager assigns the next action and the date. The service governance lead confirms that the record does not contain unnecessary personal data. The report and the query stay together.",
          "For knowledge base retirement coverage, the working file separates the raw export, the cleaned dataset, and the published table. The knowledge base retirement coverage definition separates a missing record in the retirement request from a pending decision in the article status in the service knowledge base. The measure must answer whether retired articles are removed from active scripts. The analyst records every transformation and the person who approved it. The service delivery manager confirms that the report names the observation window and the exclusions. The file is retained under the same rule as the source record.",
          "The knowledge base retirement coverage record is written so the next analyst can repeat the study without a meeting. The knowledge base retirement coverage dictionary maps each field to the retirement request, the client entitlement record, or the article status in the service knowledge base. The unresolved point is whether retired articles are removed from active scripts. It names the source, the key, the sample rule, and the known gaps. The service governance lead checks that the published numbers match the saved dataset. A correction is dated and linked to the earlier version."
        ]
      }
    ],
    "headlineStat": "A defined sample, not a verdict",
    "body": [
      "A measurement protocol for knowledge retirement coverage, with a frozen population and a dated review.",
      "The record should let a second reviewer rebuild the comparison from retirement request and the article status in the service knowledge base."
    ],
    "methodology": "This protocol applies public control guidance to knowledge retirement coverage and states its limits beside the count.",
    "related": [],
    "faq": [
      {
        "question": "How is knowledge retirement coverage measured?",
        "answer": "With a frozen population, a stored sample, and a dated review."
      },
      {
        "question": "What is excluded?",
        "answer": "Client judgments, forecasts, and claims that cannot be rebuilt from the article status in the service knowledge base are outside the count."
      }
    ]
  },
  {
    "slug": "outsourcedservice-service-report-ticket-export-reconciliation",
    "title": "Service report ticket export reconciliation",
    "excerpt": "A measurement protocol for service report reconciliation, with a frozen population, a stored sample, and a dated review.",
    "published": "2026-11-21",
    "publishedDate": "2026-11-21",
    "publishedAt": "2026-11-21",
    "modifiedDate": "2026-11-21",
    "category": "Research",
    "cluster": "Reporting operations",
    "image": "/thumbnails/november-21/outsourcedservice-service-report-ticket-export-reconciliation.webp",
    "thumbnail": "/thumbnails/november-21/outsourcedservice-service-report-ticket-export-reconciliation.webp",
    "sources": [
      {
        "label": "U.S. Department of Labor, recordkeeping",
        "url": "https://www.dol.gov/agencies/whd/recordkeeping"
      },
      {
        "label": "NIST Cybersecurity Framework",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "FTC data security guidance",
        "url": "https://www.ftc.gov/business-guidance/privacy-security/data-security"
      },
      {
        "label": "U.S. Government Accountability Office, Green Book",
        "url": "https://www.gao.gov/greenbook"
      },
      {
        "label": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business"
      },
      {
        "label": "CISA small business resources",
        "url": "https://www.cisa.gov/audiences/small-and-medium-businesses"
      },
      {
        "label": "IRS recordkeeping",
        "url": "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping"
      },
      {
        "label": "National Archives records management",
        "url": "https://www.archives.gov/records-mgmt"
      },
      {
        "label": "U.S. Bureau of Labor Statistics",
        "url": "https://www.bls.gov/"
      },
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/"
      }
    ],
    "sections": [
      {
        "heading": "Question and decision scope",
        "paragraphs": [
          "The service report ticket export reconciliation study separates the administrative question from the outcome that the service delivery manager owns. The service report ticket export reconciliation protocol fixes the question, the window, and the decision that the service delivery manager will make. The protocol asks whether report figures reconcile to the ticket export. The analyst may count whether the service report draft exists and whether the ticket export in the service management platform was updated, but cannot say whether the underlying decision was correct. The review states which records are excluded and why. A clean dashboard is not a population.",
          "The service report ticket export reconciliation review starts with a decision question, a defined population, and a stated observation window. The service report ticket export reconciliation population is built from the service report draft and checked against the ticket export in the service management platform through the client entitlement record. The study turns on whether report figures reconcile to the ticket export. The analyst writes what the count will inform before pulling any records from the service management platform. The service delivery manager confirms that the question is administrative rather than a judgment about the ticket export in the service management platform.",
          "A service report ticket export reconciliation protocol begins with the decision, the population, and the limit of the claim. The service report ticket export reconciliation definition separates a missing record in the service report draft from a pending decision in the ticket export in the service management platform. The measure must answer whether report figures reconcile to the ticket export. The analyst records the source system, the export time, and the version of the query. The service governance lead confirms that the measure can be rebuilt from the saved files. The protocol does not use the count to rank individuals or offices."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "Every service report ticket export reconciliation case in the population must have a stable identifier, a start event, and an end event in the service management platform. The service report ticket export reconciliation population is built from the service report draft and checked against the ticket export in the service management platform through the client entitlement record. The study turns on whether report figures reconcile to the ticket export. The analyst excludes records that cannot be tied to the ticket export in the service management platform and reports the exclusion count. A case that starts before the window but closes inside it is counted once, with the start date noted.",
          "A service report ticket export reconciliation population is only useful when another analyst can rebuild it. The service report ticket export reconciliation definition separates a missing record in the service report draft from a pending decision in the ticket export in the service management platform. The measure must answer whether report figures reconcile to the ticket export. The team stores the export query, the filter dates, and the list of excluded records with the report. The service governance lead checks that the population includes every channel, not only the channel that is easiest to export. The denominator is reported beside every percentage.",
          "The service report ticket export reconciliation denominator is built from the queue export, not from the dashboard total. The service report ticket export reconciliation dictionary maps each field to the service report draft, the client entitlement record, or the ticket export in the service management platform. The unresolved point is whether report figures reconcile to the ticket export. The analyst removes test records, duplicate requests, and cases outside the window, and records each removal. The service delivery manager confirms that the remaining records belong to the same operational process. The saved query is part of the result."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "The service report ticket export reconciliation protocol distinguishes a missing record from a decision that has not yet been made. The service report ticket export reconciliation definition separates a missing record in the service report draft from a pending decision in the ticket export in the service management platform. The measure must answer whether report figures reconcile to the ticket export. A missing the service report draft is an evidence gap; a pending approval is a different status. The analyst codes each case once and records the code in the dataset. The service delivery manager reviews the coding rule before the full count.",
          "Definitions for service report ticket export reconciliation use the same labels as the queue and the review. The service report ticket export reconciliation dictionary maps each field to the service report draft, the client entitlement record, or the ticket export in the service management platform. The unresolved point is whether report figures reconcile to the ticket export. The analyst avoids words like timely or complete unless the condition is written down. The service governance lead checks that the measure does not depend on a field that is optional in the service management platform. The definition is dated and stored with the export.",
          "Each service report ticket export reconciliation case is classified by the administrative event that actually occurred, not by the label in the dashboard. The service report ticket export reconciliation sample is pulled from the frozen population and stored with the query used to read the service management platform. The sample addresses whether report figures reconcile to the ticket export. The analyst checks the event against the service report draft and the client entitlement record. When the two sources disagree, the case is flagged and excluded from the main rate. The service governance lead reviews the flagged list."
        ]
      },
      {
        "heading": "Evidence dictionary",
        "paragraphs": [
          "The service report ticket export reconciliation evidence dictionary lists each field, its source system, its expected format, and the person who owns it. The service report ticket export reconciliation dictionary maps each field to the service report draft, the client entitlement record, or the ticket export in the service management platform. The unresolved point is whether report figures reconcile to the ticket export. The service report draft supplies the request date; the ticket export in the service management platform supplies the close date; the client entitlement record is used to test the join. The analyst records the export time beside every field that can change.",
          "The service report ticket export reconciliation dictionary links each measure to the field that proves it. The service report ticket export reconciliation sample is pulled from the frozen population and stored with the query used to read the service management platform. The sample addresses whether report figures reconcile to the ticket export. A count of complete records requires the service report draft to be present; a count of verified closes requires the ticket export in the service management platform to match the approval. The analyst does not use one field as a substitute for another. The service delivery manager reviews any field that changes during the window.",
          "For service report ticket export reconciliation, a missing value is coded as missing, with a reason, rather than left blank. The service report ticket export reconciliation report shows the base count, the exclusion list, and the share outside the window. The written question is whether report figures reconcile to the ticket export. The analyst distinguishes not applicable, not collected, and not yet decided. The service governance lead checks a sample of coded records against the service report draft. The coding rules are stored with the dataset."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Sampling for service report ticket export reconciliation uses the stable key to avoid counting the same case twice. The service report ticket export reconciliation sample is pulled from the frozen population and stored with the query used to read the service management platform. The sample addresses whether report figures reconcile to the ticket export. The analyst checks for duplicate requests before selection and records any merge. The service report draft is reviewed for the sampled cases only, while the full population is used for the denominator. The two counts are reported separately.",
          "The service report ticket export reconciliation sample is large enough to show the shape of the queue without pretending to be a benchmark. The service report ticket export reconciliation report shows the base count, the exclusion list, and the share outside the window. The written question is whether report figures reconcile to the ticket export. The analyst reports the sample size and the confidence limits that the design can support. The service governance lead checks that the sample was not filtered by an outcome variable. A convenience sample is labeled as such.",
          "For service report ticket export reconciliation, the analyst pulls the population first and selects the sample second. The service report ticket export reconciliation protocol fixes the question, the window, and the decision that the service delivery manager will make. The protocol asks whether report figures reconcile to the ticket export. Cases are not added after the first result is known. The service delivery manager confirms that the sample covers the full observation window. The selection log is kept so the sample can be rebuilt."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "The service report ticket export reconciliation analysis uses the same window and definition as the protocol. The service report ticket export reconciliation report shows the base count, the exclusion list, and the share outside the window. The written question is whether report figures reconcile to the ticket export. Any deviation is listed in a short methods note. The analyst keeps the working file so a later reviewer can rebuild the result. The service delivery manager signs the interpretation only after the numbers are reconciled.",
          "The service report ticket export reconciliation report ends with the limit of the claim and the next question. The service report ticket export reconciliation protocol fixes the question, the window, and the decision that the service delivery manager will make. The protocol asks whether report figures reconcile to the ticket export. The analyst states what the data cannot show and which records were excluded. The service governance lead checks that the conclusion does not exceed the design. The report is dated and versioned.",
          "The service report ticket export reconciliation analysis reports the median, the share outside the window, and the oldest open case. The service report ticket export reconciliation population is built from the service report draft and checked against the ticket export in the service management platform through the client entitlement record. The study turns on whether report figures reconcile to the ticket export. The analyst separates first response from final resolution because the two answer different questions. The service delivery manager reviews the result against the decision question before any recommendation is written. A single average is not used to hide a long tail."
        ]
      },
      {
        "heading": "Limitations",
        "paragraphs": [
          "Every service report ticket export reconciliation report carries a limitation note written by the analyst and reviewed by the service governance lead. The service report ticket export reconciliation protocol fixes the question, the window, and the decision that the service delivery manager will make. The protocol asks whether report figures reconcile to the ticket export. The note names the source gaps, the definition choices, and the claims the design cannot support. The report avoids language that implies a guarantee. The next review is scheduled only when the source is stable.",
          "The service report ticket export reconciliation review cannot separate a change in the work from a change in how the work is recorded. The service report ticket export reconciliation population is built from the service report draft and checked against the ticket export in the service management platform through the client entitlement record. The study turns on whether report figures reconcile to the ticket export. The analyst names that risk in the methods note. The service delivery manager confirms that the result will not be used to evaluate an individual. The limitation section is published with the report, not added later.",
          "A service report ticket export reconciliation case can be affected by customer availability, source quality, staffing changes, and handoff timing. The service report ticket export reconciliation definition separates a missing record in the service report draft from a pending decision in the ticket export in the service management platform. The measure must answer whether report figures reconcile to the ticket export. The protocol describes one defined population and does not establish a universal standard. The service governance lead checks that the limitation is written beside the finding. The team repeats the review only after the definition and source are stable."
        ]
      },
      {
        "heading": "Recordkeeping and repeatability",
        "paragraphs": [
          "For service report ticket export reconciliation, the working file separates the raw export, the cleaned dataset, and the published table. The service report ticket export reconciliation population is built from the service report draft and checked against the ticket export in the service management platform through the client entitlement record. The study turns on whether report figures reconcile to the ticket export. The analyst records every transformation and the person who approved it. The service delivery manager confirms that the report names the observation window and the exclusions. The file is retained under the same rule as the source record.",
          "The service report ticket export reconciliation record is written so the next analyst can repeat the study without a meeting. The service report ticket export reconciliation definition separates a missing record in the service report draft from a pending decision in the ticket export in the service management platform. The measure must answer whether report figures reconcile to the ticket export. It names the source, the key, the sample rule, and the known gaps. The service governance lead checks that the published numbers match the saved dataset. A correction is dated and linked to the earlier version.",
          "The service report ticket export reconciliation record includes the protocol, the export query, the sample, the coding rules, and the final report. The service report ticket export reconciliation dictionary maps each field to the service report draft, the client entitlement record, or the ticket export in the service management platform. The unresolved point is whether report figures reconcile to the ticket export. The service delivery manager confirms that each version is dated and stored together. The service governance lead checks that the result can be rebuilt from the saved files. A report without its query is treated as a draft."
        ]
      }
    ],
    "headlineStat": "A defined sample, not a verdict",
    "body": [
      "A measurement protocol for service report reconciliation, with a frozen population and a dated review.",
      "The record should let a second reviewer rebuild the comparison from service report draft and the ticket export in the service management platform."
    ],
    "methodology": "This protocol applies public control guidance to service report reconciliation and states its limits beside the count.",
    "related": [],
    "faq": [
      {
        "question": "How is service report reconciliation measured?",
        "answer": "With a frozen population, a stored sample, and a dated review."
      },
      {
        "question": "What is excluded?",
        "answer": "Client judgments, forecasts, and claims that cannot be rebuilt from the ticket export in the service management platform are outside the count."
      }
    ]
  },
  {
    "slug": "outsourcedservice-client-access-removal-timeliness",
    "title": "Client access removal timeliness",
    "excerpt": "A measurement protocol for access removal timeliness, with a frozen population, a stored sample, and a dated review.",
    "published": "2026-11-21",
    "publishedDate": "2026-11-21",
    "publishedAt": "2026-11-21",
    "modifiedDate": "2026-11-21",
    "category": "Research",
    "cluster": "Access operations",
    "image": "/thumbnails/november-21/outsourcedservice-client-access-removal-timeliness.webp",
    "thumbnail": "/thumbnails/november-21/outsourcedservice-client-access-removal-timeliness.webp",
    "sources": [
      {
        "label": "U.S. Department of Labor, recordkeeping",
        "url": "https://www.dol.gov/agencies/whd/recordkeeping"
      },
      {
        "label": "NIST Cybersecurity Framework",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "FTC data security guidance",
        "url": "https://www.ftc.gov/business-guidance/privacy-security/data-security"
      },
      {
        "label": "U.S. Government Accountability Office, Green Book",
        "url": "https://www.gao.gov/greenbook"
      },
      {
        "label": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business"
      },
      {
        "label": "CISA small business resources",
        "url": "https://www.cisa.gov/audiences/small-and-medium-businesses"
      },
      {
        "label": "IRS recordkeeping",
        "url": "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping"
      },
      {
        "label": "National Archives records management",
        "url": "https://www.archives.gov/records-mgmt"
      },
      {
        "label": "U.S. Bureau of Labor Statistics",
        "url": "https://www.bls.gov/"
      },
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/"
      }
    ],
    "sections": [
      {
        "heading": "Question and decision scope",
        "paragraphs": [
          "The client access removal timeliness study separates the administrative question from the outcome that the service delivery manager owns. The client access removal timeliness protocol fixes the question, the window, and the decision that the service delivery manager will make. The protocol asks whether access is removed within the written window. The analyst may count whether the role change notice exists and whether the user access list in the client portal was updated, but cannot say whether the underlying decision was correct. The review states which records are excluded and why. A clean dashboard is not a population.",
          "The client access removal timeliness review is designed to answer one question about the administrative record, not to prove a business outcome. The client access removal timeliness population is built from the role change notice and checked against the user access list in the client portal through the client entitlement record. The study turns on whether access is removed within the written window. The analyst names the population, the unit, the window, and the source of the timestamps. The service governance lead checks that the question does not require a judgment reserved for the service delivery manager. The result is reported with its limits beside it.",
          "The first draft of the client access removal timeliness question is tested against a handful of cases before the full export. The client access removal timeliness definition separates a missing record in the role change notice from a pending decision in the user access list in the client portal. The measure must answer whether access is removed within the written window. The analyst checks whether the role change notice and the user access list in the client portal share a stable key. The service delivery manager confirms that the question is narrow enough to answer with the available evidence."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "The client access removal timeliness unit is one case per one user role change, not one document, one message, or one person. The client access removal timeliness population is built from the role change notice and checked against the user access list in the client portal through the client entitlement record. The study turns on whether access is removed within the written window. If a case produces several documents, the documents are linked to the same unit. The analyst records the date of the first request and the date of the final administrative action.",
          "Every client access removal timeliness case in the population must have a stable identifier, a start event, and an end event in the service management platform. The client access removal timeliness definition separates a missing record in the role change notice from a pending decision in the user access list in the client portal. The measure must answer whether access is removed within the written window. The analyst excludes records that cannot be tied to the user access list in the client portal and reports the exclusion count. A case that starts before the window but closes inside it is counted once, with the start date noted.",
          "Population rules for client access removal timeliness name the intake point, the closing point, and the records excluded at each end. The client access removal timeliness dictionary maps each field to the role change notice, the client entitlement record, or the user access list in the client portal. The unresolved point is whether access is removed within the written window. The analyst checks that the role change notice and the client entitlement record use the same identifier before joining them. Cases that cannot be matched are held in a separate list rather than dropped. The service governance lead reviews the list before the denominator is fixed."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "For client access removal timeliness, completeness means that the role change notice is present, dated, and linked to the user access list in the client portal. The client access removal timeliness definition separates a missing record in the role change notice from a pending decision in the user access list in the client portal. The measure must answer whether access is removed within the written window. It does not mean that the underlying decision was correct. The analyst reports the definition beside the count so a later reader can see what was measured. The service governance lead checks the definition against two hand-counted cases.",
          "The client access removal timeliness protocol distinguishes a missing record from a decision that has not yet been made. The client access removal timeliness dictionary maps each field to the role change notice, the client entitlement record, or the user access list in the client portal. The unresolved point is whether access is removed within the written window. A missing the role change notice is an evidence gap; a pending approval is a different status. The analyst codes each case once and records the code in the dataset. The service delivery manager reviews the coding rule before the full count.",
          "The client access removal timeliness definition states the start event, the end event, and the condition that counts as complete. The client access removal timeliness sample is pulled from the frozen population and stored with the query used to read the service management platform. The sample addresses whether access is removed within the written window. The start event is the first recorded request in the service management platform; the end event is the update to the user access list in the client portal. A case that pauses for missing evidence is still counted, with the pause noted separately. The definition is written before the data is pulled."
        ]
      },
      {
        "heading": "Evidence dictionary",
        "paragraphs": [
          "Before analysis, the client access removal timeliness team confirms that the evidence dictionary matches the live version of the service management platform. The client access removal timeliness dictionary maps each field to the role change notice, the client entitlement record, or the user access list in the client portal. The unresolved point is whether access is removed within the written window. A field added after the window starts is not backfilled into the old series. The service governance lead checks that the dictionary and the export query agree. The dictionary is versioned with the report.",
          "Every field in the client access removal timeliness dataset is traceable to a page, a query, or a system record. The client access removal timeliness sample is pulled from the frozen population and stored with the query used to read the service management platform. The sample addresses whether access is removed within the written window. The dictionary names the difference between a value that was observed and a value that was inferred. The service governance lead checks that the role change notice and the user access list in the client portal use the same date convention. Ambiguous fields are excluded rather than guessed.",
          "The client access removal timeliness evidence dictionary is written before the first chart so the chart cannot choose its own definitions. The client access removal timeliness report shows the base count, the exclusion list, and the share outside the window. The written question is whether access is removed within the written window. Each entry states the field name, the source, the allowed values, and the treatment of blanks. The analyst keeps the raw export beside the cleaned dataset. The service delivery manager confirms that the dictionary covers the fields used in the decision."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "The client access removal timeliness sample is large enough to show the shape of the queue without pretending to be a benchmark. The client access removal timeliness sample is pulled from the frozen population and stored with the query used to read the service management platform. The sample addresses whether access is removed within the written window. The analyst reports the sample size and the confidence limits that the design can support. The service governance lead checks that the sample was not filtered by an outcome variable. A convenience sample is labeled as such.",
          "Sampling for client access removal timeliness uses the stable key to avoid counting the same case twice. The client access removal timeliness report shows the base count, the exclusion list, and the share outside the window. The written question is whether access is removed within the written window. The analyst checks for duplicate requests before selection and records any merge. The role change notice is reviewed for the sampled cases only, while the full population is used for the denominator. The two counts are reported separately.",
          "For client access removal timeliness, the analyst pulls the population first and selects the sample second. The client access removal timeliness protocol fixes the question, the window, and the decision that the service delivery manager will make. The protocol asks whether access is removed within the written window. Cases are not added after the first result is known. The service delivery manager confirms that the sample covers the full observation window. The selection log is kept so the sample can be rebuilt."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "The client access removal timeliness analysis uses the same window and definition as the protocol. The client access removal timeliness report shows the base count, the exclusion list, and the share outside the window. The written question is whether access is removed within the written window. Any deviation is listed in a short methods note. The analyst keeps the working file so a later reviewer can rebuild the result. The service delivery manager signs the interpretation only after the numbers are reconciled.",
          "The client access removal timeliness analysis reports the median, the share outside the window, and the oldest open case. The client access removal timeliness protocol fixes the question, the window, and the decision that the service delivery manager will make. The protocol asks whether access is removed within the written window. The analyst separates first response from final resolution because the two answer different questions. The service delivery manager reviews the result against the decision question before any recommendation is written. A single average is not used to hide a long tail.",
          "For client access removal timeliness, the analyst reports the count and the rate together so a reader can see the size of the base. The client access removal timeliness population is built from the role change notice and checked against the user access list in the client portal through the client entitlement record. The study turns on whether access is removed within the written window. Cells with very small counts are grouped or suppressed. The service governance lead checks that the denominator is visible on every percentage. The report names the records that could not be retrieved."
        ]
      },
      {
        "heading": "Limitations",
        "paragraphs": [
          "The client access removal timeliness review cannot separate a change in the work from a change in how the work is recorded. The client access removal timeliness protocol fixes the question, the window, and the decision that the service delivery manager will make. The protocol asks whether access is removed within the written window. The analyst names that risk in the methods note. The service delivery manager confirms that the result will not be used to evaluate an individual. The limitation section is published with the report, not added later.",
          "The client access removal timeliness design does not control for seasonality, queue mix, or staffing changes. The client access removal timeliness population is built from the role change notice and checked against the user access list in the client portal through the client entitlement record. The study turns on whether access is removed within the written window. The analyst states that the result describes the observed window only. The service delivery manager confirms that the review question is administrative rather than causal. A repeat study uses a new window rather than extending the old one.",
          "Every client access removal timeliness report carries a limitation note written by the analyst and reviewed by the service governance lead. The client access removal timeliness definition separates a missing record in the role change notice from a pending decision in the user access list in the client portal. The measure must answer whether access is removed within the written window. The note names the source gaps, the definition choices, and the claims the design cannot support. The report avoids language that implies a guarantee. The next review is scheduled only when the source is stable."
        ]
      },
      {
        "heading": "Recordkeeping and repeatability",
        "paragraphs": [
          "Each client access removal timeliness review closes with a short record of what was examined, what was excluded, and what remains uncertain. The client access removal timeliness population is built from the role change notice and checked against the user access list in the client portal through the client entitlement record. The study turns on whether access is removed within the written window. The service delivery manager assigns the next action and the date. The service governance lead confirms that the record does not contain unnecessary personal data. The report and the query stay together.",
          "The client access removal timeliness record is written so the next analyst can repeat the study without a meeting. The client access removal timeliness definition separates a missing record in the role change notice from a pending decision in the user access list in the client portal. The measure must answer whether access is removed within the written window. It names the source, the key, the sample rule, and the known gaps. The service governance lead checks that the published numbers match the saved dataset. A correction is dated and linked to the earlier version.",
          "Version control for client access removal timeliness starts with the protocol and ends with the published table. The client access removal timeliness dictionary maps each field to the role change notice, the client entitlement record, or the user access list in the client portal. The unresolved point is whether access is removed within the written window. The analyst labels each file with the window and the run date. The service delivery manager confirms that the version in the report is the version in the archive. A later change creates a new version rather than editing history."
        ]
      }
    ],
    "headlineStat": "A defined sample, not a verdict",
    "body": [
      "A measurement protocol for access removal timeliness, with a frozen population and a dated review.",
      "The record should let a second reviewer rebuild the comparison from role change notice and the user access list in the client portal."
    ],
    "methodology": "This protocol applies public control guidance to access removal timeliness and states its limits beside the count.",
    "related": [],
    "faq": [
      {
        "question": "How is access removal timeliness measured?",
        "answer": "With a frozen population, a stored sample, and a dated review."
      },
      {
        "question": "What is excluded?",
        "answer": "Client judgments, forecasts, and claims that cannot be rebuilt from the user access list in the client portal are outside the count."
      }
    ]
  },
  {
    "slug": "outsourcedservice-disaster-recovery-contact-tree-currency",
    "title": "Disaster recovery contact tree currency",
    "excerpt": "A measurement protocol for contact tree currency, with a frozen population, a stored sample, and a dated review.",
    "published": "2026-11-21",
    "publishedDate": "2026-11-21",
    "publishedAt": "2026-11-21",
    "modifiedDate": "2026-11-21",
    "category": "Research",
    "cluster": "Continuity operations",
    "image": "/thumbnails/november-21/outsourcedservice-disaster-recovery-contact-tree-currency.webp",
    "thumbnail": "/thumbnails/november-21/outsourcedservice-disaster-recovery-contact-tree-currency.webp",
    "sources": [
      {
        "label": "U.S. Department of Labor, recordkeeping",
        "url": "https://www.dol.gov/agencies/whd/recordkeeping"
      },
      {
        "label": "NIST Cybersecurity Framework",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "FTC data security guidance",
        "url": "https://www.ftc.gov/business-guidance/privacy-security/data-security"
      },
      {
        "label": "U.S. Government Accountability Office, Green Book",
        "url": "https://www.gao.gov/greenbook"
      },
      {
        "label": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business"
      },
      {
        "label": "CISA small business resources",
        "url": "https://www.cisa.gov/audiences/small-and-medium-businesses"
      },
      {
        "label": "IRS recordkeeping",
        "url": "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping"
      },
      {
        "label": "National Archives records management",
        "url": "https://www.archives.gov/records-mgmt"
      },
      {
        "label": "U.S. Bureau of Labor Statistics",
        "url": "https://www.bls.gov/"
      },
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/"
      }
    ],
    "sections": [
      {
        "heading": "Question and decision scope",
        "paragraphs": [
          "The first draft of the disaster recovery contact tree currency question is tested against a handful of cases before the full export. The disaster recovery contact tree currency protocol fixes the question, the window, and the decision that the service delivery manager will make. The protocol asks whether the contact tree is current for a recovery test. The analyst checks whether the supplier change notice and the contact tree in the continuity plan share a stable key. The service delivery manager confirms that the question is narrow enough to answer with the available evidence. Any change to the definition is dated and applied to a new draw.",
          "A disaster recovery contact tree currency protocol begins with the decision, the population, and the limit of the claim. The disaster recovery contact tree currency population is built from the supplier change notice and checked against the contact tree in the continuity plan through the client entitlement record. The study turns on whether the contact tree is current for a recovery test. The analyst records the source system, the export time, and the version of the query. The service governance lead confirms that the measure can be rebuilt from the saved files. The protocol does not use the count to rank individuals or offices.",
          "The disaster recovery contact tree currency study separates the administrative question from the outcome that the service delivery manager owns. The disaster recovery contact tree currency definition separates a missing record in the supplier change notice from a pending decision in the contact tree in the continuity plan. The measure must answer whether the contact tree is current for a recovery test. The analyst may count whether the supplier change notice exists and whether the contact tree in the continuity plan was updated, but cannot say whether the underlying decision was correct. The review states which records are excluded and why. A clean dashboard is not a population."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "Every disaster recovery contact tree currency case in the population must have a stable identifier, a start event, and an end event in the service management platform. The disaster recovery contact tree currency population is built from the supplier change notice and checked against the contact tree in the continuity plan through the client entitlement record. The study turns on whether the contact tree is current for a recovery test. The analyst excludes records that cannot be tied to the contact tree in the continuity plan and reports the exclusion count. A case that starts before the window but closes inside it is counted once, with the start date noted.",
          "The disaster recovery contact tree currency unit is one case per one supplier contact, not one document, one message, or one person. The disaster recovery contact tree currency definition separates a missing record in the supplier change notice from a pending decision in the contact tree in the continuity plan. The measure must answer whether the contact tree is current for a recovery test. If a case produces several documents, the documents are linked to the same unit. The analyst records the date of the first request and the date of the final administrative action.",
          "The disaster recovery contact tree currency denominator is built from the queue export, not from the dashboard total. The disaster recovery contact tree currency dictionary maps each field to the supplier change notice, the client entitlement record, or the contact tree in the continuity plan. The unresolved point is whether the contact tree is current for a recovery test. The analyst removes test records, duplicate requests, and cases outside the window, and records each removal. The service delivery manager confirms that the remaining records belong to the same operational process. The saved query is part of the result."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Each disaster recovery contact tree currency case is classified by the administrative event that actually occurred, not by the label in the dashboard. The disaster recovery contact tree currency definition separates a missing record in the supplier change notice from a pending decision in the contact tree in the continuity plan. The measure must answer whether the contact tree is current for a recovery test. The analyst checks the event against the supplier change notice and the client entitlement record. When the two sources disagree, the case is flagged and excluded from the main rate. The service governance lead reviews the flagged list.",
          "The disaster recovery contact tree currency protocol distinguishes a missing record from a decision that has not yet been made. The disaster recovery contact tree currency dictionary maps each field to the supplier change notice, the client entitlement record, or the contact tree in the continuity plan. The unresolved point is whether the contact tree is current for a recovery test. A missing the supplier change notice is an evidence gap; a pending approval is a different status. The analyst codes each case once and records the code in the dataset. The service delivery manager reviews the coding rule before the full count.",
          "The disaster recovery contact tree currency definition states the start event, the end event, and the condition that counts as complete. The disaster recovery contact tree currency sample is pulled from the frozen population and stored with the query used to read the service management platform. The sample addresses whether the contact tree is current for a recovery test. The start event is the first recorded request in the service management platform; the end event is the update to the contact tree in the continuity plan. A case that pauses for missing evidence is still counted, with the pause noted separately. The definition is written before the data is pulled."
        ]
      },
      {
        "heading": "Evidence dictionary",
        "paragraphs": [
          "The disaster recovery contact tree currency evidence dictionary lists each field, its source system, its expected format, and the person who owns it. The disaster recovery contact tree currency dictionary maps each field to the supplier change notice, the client entitlement record, or the contact tree in the continuity plan. The unresolved point is whether the contact tree is current for a recovery test. The supplier change notice supplies the request date; the contact tree in the continuity plan supplies the close date; the client entitlement record is used to test the join. The analyst records the export time beside every field that can change.",
          "For disaster recovery contact tree currency, a missing value is coded as missing, with a reason, rather than left blank. The disaster recovery contact tree currency sample is pulled from the frozen population and stored with the query used to read the service management platform. The sample addresses whether the contact tree is current for a recovery test. The analyst distinguishes not applicable, not collected, and not yet decided. The service governance lead checks a sample of coded records against the supplier change notice. The coding rules are stored with the dataset.",
          "Every field in the disaster recovery contact tree currency dataset is traceable to a page, a query, or a system record. The disaster recovery contact tree currency report shows the base count, the exclusion list, and the share outside the window. The written question is whether the contact tree is current for a recovery test. The dictionary names the difference between a value that was observed and a value that was inferred. The service governance lead checks that the supplier change notice and the contact tree in the continuity plan use the same date convention. Ambiguous fields are excluded rather than guessed."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "The disaster recovery contact tree currency sample includes records from every channel in the population, even when one channel supplies most of the volume. The disaster recovery contact tree currency sample is pulled from the frozen population and stored with the query used to read the service management platform. The sample addresses whether the contact tree is current for a recovery test. The analyst records the channel mix beside the result. The service delivery manager confirms that no channel was excluded because its records were harder to retrieve. The exclusion list is published with the sample.",
          "The disaster recovery contact tree currency sample is large enough to show the shape of the queue without pretending to be a benchmark. The disaster recovery contact tree currency report shows the base count, the exclusion list, and the share outside the window. The written question is whether the contact tree is current for a recovery test. The analyst reports the sample size and the confidence limits that the design can support. The service governance lead checks that the sample was not filtered by an outcome variable. A convenience sample is labeled as such.",
          "For disaster recovery contact tree currency, the analyst pulls the population first and selects the sample second. The disaster recovery contact tree currency protocol fixes the question, the window, and the decision that the service delivery manager will make. The protocol asks whether the contact tree is current for a recovery test. Cases are not added after the first result is known. The service delivery manager confirms that the sample covers the full observation window. The selection log is kept so the sample can be rebuilt."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "For disaster recovery contact tree currency, the analyst reports the count and the rate together so a reader can see the size of the base. The disaster recovery contact tree currency report shows the base count, the exclusion list, and the share outside the window. The written question is whether the contact tree is current for a recovery test. Cells with very small counts are grouped or suppressed. The service governance lead checks that the denominator is visible on every percentage. The report names the records that could not be retrieved.",
          "The disaster recovery contact tree currency report ends with the limit of the claim and the next question. The disaster recovery contact tree currency protocol fixes the question, the window, and the decision that the service delivery manager will make. The protocol asks whether the contact tree is current for a recovery test. The analyst states what the data cannot show and which records were excluded. The service governance lead checks that the conclusion does not exceed the design. The report is dated and versioned.",
          "The disaster recovery contact tree currency analysis reports the median, the share outside the window, and the oldest open case. The disaster recovery contact tree currency population is built from the supplier change notice and checked against the contact tree in the continuity plan through the client entitlement record. The study turns on whether the contact tree is current for a recovery test. The analyst separates first response from final resolution because the two answer different questions. The service delivery manager reviews the result against the decision question before any recommendation is written. A single average is not used to hide a long tail."
        ]
      },
      {
        "heading": "Limitations",
        "paragraphs": [
          "The disaster recovery contact tree currency result is limited by the quality of the supplier change notice, the availability of the contact tree in the continuity plan, and the stability of the recording rule. The disaster recovery contact tree currency protocol fixes the question, the window, and the decision that the service delivery manager will make. The protocol asks whether the contact tree is current for a recovery test. The report states these limits before presenting a rate. The service delivery manager confirms that the limitation does not invalidate the administrative use of the count. The result is not a benchmark for other teams.",
          "Every disaster recovery contact tree currency report carries a limitation note written by the analyst and reviewed by the service governance lead. The disaster recovery contact tree currency population is built from the supplier change notice and checked against the contact tree in the continuity plan through the client entitlement record. The study turns on whether the contact tree is current for a recovery test. The note names the source gaps, the definition choices, and the claims the design cannot support. The report avoids language that implies a guarantee. The next review is scheduled only when the source is stable.",
          "Missing records are the largest limitation in the disaster recovery contact tree currency study. The disaster recovery contact tree currency definition separates a missing record in the supplier change notice from a pending decision in the contact tree in the continuity plan. The measure must answer whether the contact tree is current for a recovery test. The analyst reports how many records could not be tied to the contact tree in the continuity plan and how the denominator changed. The service governance lead checks that the missing records were not treated as failures. The result is reported as a range when the missing share is material."
        ]
      },
      {
        "heading": "Recordkeeping and repeatability",
        "paragraphs": [
          "Version control for disaster recovery contact tree currency starts with the protocol and ends with the published table. The disaster recovery contact tree currency population is built from the supplier change notice and checked against the contact tree in the continuity plan through the client entitlement record. The study turns on whether the contact tree is current for a recovery test. The analyst labels each file with the window and the run date. The service delivery manager confirms that the version in the report is the version in the archive. A later change creates a new version rather than editing history.",
          "The disaster recovery contact tree currency record includes the protocol, the export query, the sample, the coding rules, and the final report. The disaster recovery contact tree currency definition separates a missing record in the supplier change notice from a pending decision in the contact tree in the continuity plan. The measure must answer whether the contact tree is current for a recovery test. The service delivery manager confirms that each version is dated and stored together. The service governance lead checks that the result can be rebuilt from the saved files. A report without its query is treated as a draft.",
          "Each disaster recovery contact tree currency review closes with a short record of what was examined, what was excluded, and what remains uncertain. The disaster recovery contact tree currency dictionary maps each field to the supplier change notice, the client entitlement record, or the contact tree in the continuity plan. The unresolved point is whether the contact tree is current for a recovery test. The service delivery manager assigns the next action and the date. The service governance lead confirms that the record does not contain unnecessary personal data. The report and the query stay together."
        ]
      }
    ],
    "headlineStat": "A defined sample, not a verdict",
    "body": [
      "A measurement protocol for contact tree currency, with a frozen population and a dated review.",
      "The record should let a second reviewer rebuild the comparison from supplier change notice and the contact tree in the continuity plan."
    ],
    "methodology": "This protocol applies public control guidance to contact tree currency and states its limits beside the count.",
    "related": [],
    "faq": [
      {
        "question": "How is contact tree currency measured?",
        "answer": "With a frozen population, a stored sample, and a dated review."
      },
      {
        "question": "What is excluded?",
        "answer": "Client judgments, forecasts, and claims that cannot be rebuilt from the contact tree in the continuity plan are outside the count."
      }
    ]
  }
];
