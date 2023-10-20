---
title: Invited Talks 
layout: archive 
permalink: /talks/
---

Below a list of tentative speakers (some of them to be confirmed) 


{% assign entries_layout = page.entries_layout | default: 'list' %}
{% assign entries = site.talks  %}

<div class="entries-{{ entries_layout }}">

  {%- for post in entries -%}
    {%- unless post.hidden -%}
      {% include talk-single.html %}
    {%- endunless -%}
  {%- endfor -%}

</div>

