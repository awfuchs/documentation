---
title: LLM Observability
aliases:
    - /tracing/llm_observability/
further_reading:
- link: "https://www.datadoghq.com/blog/anthropic-integration-datadog-llm-observability/"
  tag: "Blog"
  text: "Monitor your Anthropic applications with Datadog LLM Observability"
---

{{% site-region region="gov" %}}
<div class="alert alert-warning">
LLM Observability is not available in the US1-FED site.
</div>

{{% /site-region %}}

## Overview

With LLM Observability, you can monitor, troubleshoot, and evaluate your LLM-powered applications, such as chatbots. You can investigate the root cause of issues, monitor operational performance, and evaluate the quality, privacy, and safety of your LLM applications. 

Each request fulfilled by your application is represented as a trace on the [**LLM Observability** page][1] in Datadog.

{{< img src="llm_observability/traces.png" alt="A list of prompt-response pair traces on the LLM Observability page" style="width:100%;" >}}
 
A trace can represent:

- An individual LLM inference, including tokens, error information, and latency
- A predetermined LLM workflow, which is a grouping of LLM calls and their contextual operations, such as tool calls or preprocessing steps
- A dynamic LLM workflow executed by an LLM agent

Each trace contains spans representing each choice made by an agent or each step of a given workflow. A given trace can also include input and output, latency, privacy issues, errors, and more. For more information, see [Terms and Concepts][2].

## Troubleshoot with end-to-end tracing

View every step of your LLM application chains and calls to pinpoint problematic requests and identify the root cause of errors.

{{< img src="llm_observability/errors.png" alt="Errors that occurred in a trace on the Errors tab in a trace side panel" style="width:100%;" >}}

## Monitor operational metrics and optimize cost

Monitor the cost, latency, performance, and usage trends for all your LLM applications with [out-of-the-box dashboards][7].

{{< img src="llm_observability/dashboard_1.png" alt="The out-of-the-box LLM Observability Operational Insights dashboard in Datadog" style="width:100%;" >}}

## Evaluate the quality and effectiveness of your LLM applications

Identify problematic clusters and monitor the quality of responses over time with topical clustering and checks like sentiment, failure to answer, and so on.

{{< img src="llm_observability/clusters-page.png" alt="The clusters page in LLM Observability" style="width:100%;" >}}

## Safeguard sensitive data and identify malicious users

Automatically scan and redact any sensitive data in your AI applications and identify prompt injections, among other evaluations.

{{< img src="llm_observability/prompt_injection.png" alt="An example of a prompt-injection attempt detected by LLM Observability" style="width:100%;" >}}

<div class="alert alert-warning">By using LLM Observability, you acknowledge that Datadog is authorized to share your company's data with OpenAI LLC for the purpose of providing and improving LLM Observability. OpenAI will not use your data for training or tuning purposes. If you have any questions or want to opt out of features that depend on OpenAI, reach out to your account representative.</div>

## Ready to start?

See the [Setup documentation][5] for instructions on instrumenting your LLM application or follow the [Trace an LLM Application guide][6] to generate a trace using the [LLM Observability SDK for Python][3].

## Further Reading

{{< partial name="whats-next/whats-next.html" >}}

[1]: https://app.datadoghq.com/llm/traces
[2]: /llm_observability/terms
[3]: /llm_observability/setup/sdk
[4]: /llm_observability/setup/api
[5]: /llm_observability/setup
[6]: /llm_observability/quickstart
[7]: https://app.datadoghq.com/dash/integration/llm_operational_insights