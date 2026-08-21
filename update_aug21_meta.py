import json

path = "app/aug21-meta.json"
with open(path, "r") as f:
    data = json.load(f)

new_articles = {
    "service-delivery-attrition-impact-research": {
        "family": "research",
        "title": "Measuring the Impact of Annualized Attrition on Offshore Service Delivery Metrics",
        "description": "An empirical analysis of how standard attrition rates in Philippines-based offshore teams degrade service delivery performance over a 12-month period.",
        "hero": "/aug21-heroes/service-delivery-attrition-impact-research.svg"
    },
    "service-delivery-cross-cultural-communication-overhead-research": {
        "family": "research",
        "title": "Quantifying Cross-Cultural Communication Overhead in Outsourced Technical Support",
        "description": "Research detailing the measurable productivity overhead created by cross-cultural communication gaps when outsourcing complex technical support queues.",
        "hero": "/aug21-heroes/service-delivery-cross-cultural-communication-overhead-research.svg"
    },
    "service-delivery-tooling-fragmentation-research": {
        "family": "research",
        "title": "The Correlation Between Tooling Fragmentation and Error Rates in Back-Office Processing",
        "description": "An investigation into how the number of distinct client-mandated SaaS tools directly correlates with elevated error rates in outsourced back-office processing.",
        "hero": "/aug21-heroes/service-delivery-tooling-fragmentation-research.svg"
    },
    "service-delivery-weekend-coverage-utilization-research": {
        "family": "research",
        "title": "Evaluating Dedicated Weekend-Only Teams Versus Rotating Weekday Personnel for Continuous Coverage",
        "description": "A comparative study on the reliability and output quality of dedicated weekend-only offshore shift teams against standard rotating weekday personnel.",
        "hero": "/aug21-heroes/service-delivery-weekend-coverage-utilization-research.svg"
    },
    "service-delivery-onboarding-duration-quality-research": {
        "family": "research",
        "title": "The Effect of Extended Onboarding Duration on First-Month Critical Errors in Outsourced Services",
        "description": "Research examining whether extending formal offshore training beyond 4 weeks yields a statistically significant reduction in first-month critical errors.",
        "hero": "/aug21-heroes/service-delivery-onboarding-duration-quality-research.svg"
    }
}

data.update(new_articles)

with open(path, "w") as f:
    json.dump(data, f, indent=2)

