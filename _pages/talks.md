---
title: Invited Talks 
layout: archive 
permalink: /talks/
---

description 


{% assign entries_layout = page.entries_layout | default: 'list' %}
{% assign entries = site.talks  %}

<div class="entries-{{ entries_layout }}">

  {%- for post in entries -%}
    {%- unless post.hidden -%}
      {% include talk-single.html %}
    {%- endunless -%}
  {%- endfor -%}

</div>

