---
title: Programme 
permalink: /programme/
---

The social dinner will take place at **Osteria degli Artisti**, Via Boccadasse 37r, Genova.
The price will be about 45€ all inclusive. 

If you have registered, please fill out the form we sent you by email. It contains necessary information for the organization. 

More information on the public event is available [here]({{ '/show/' | relative_url }}). 

{%- assign talk_url = '/assets/abstracts/' %} 

<table>
  <tbody> 
{%- for d in site.data.schedule %}
<tr> <th colspan="2"> {{ d.day }} </th> </tr> 
{%- for slot in d.slots %}
{%- if slot.type == "talk" %} 
{%- assign talks = site.talks | where_exp: "item", "item.slot == slot.id" %} 
{%- for t in talks %} 
<tr>
  <td> {{ slot.time }} </td>
  <td> 
    <a href="{{ t.url | relative_url }}">{{ t.author.name }}</a> 
  </td>
</tr> 
{%- endfor %} 
{%- else %}
<tr>
  <td> <strong>{{ slot.time }}</strong> </td>
  <td> <strong>{{ slot.type }}</strong> </td>
</tr> 
{%- endif %} 
{%- endfor %} 
{% endfor %} 
</tbody> </table> 




