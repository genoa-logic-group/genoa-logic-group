---
title: Participants 
permalink: /participants/
---

{%- assign ps = site.data.participants | sort: "surname" %}

{%- for p in ps %}
* {{ p.name }} {{ p.surname }} {% if p.affiliation -%} ({{ p.affiliation }}) {%- endif -%} 
{%- endfor %}



