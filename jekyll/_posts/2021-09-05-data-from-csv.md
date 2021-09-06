---
author: ted
title: Data from CSV
---

Data from a CSV file.

{% for dt in site.data.csvData %}
{{ dt.id }}. {{ dt.name }}
{% endfor %}