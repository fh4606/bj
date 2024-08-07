import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as a,d as e}from"./app-DuswJAHG.js";const i={},l=e(`<h2 id="_1、告警通知总结" tabindex="-1"><a class="header-anchor" href="#_1、告警通知总结"><span>1、告警通知总结</span></a></h2><p>生产建议</p><p>最好选2个告警通知。如果很重要的可以设置电话告警，因为微信，钉钉信息很多人不看。但是来电话了基本都会看下</p><h2 id="_2、配置总结" tabindex="-1"><a class="header-anchor" href="#_2、配置总结"><span>2、配置总结</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>vim alertmanager/config.yml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>配置如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>global:</span></span>
<span class="line"><span>  #163服务器</span></span>
<span class="line"><span>  smtp_smarthost: &#39;smtp.163.com:465&#39;</span></span>
<span class="line"><span>  #发邮件的邮箱</span></span>
<span class="line"><span>  smtp_from: &#39;cdring@163.com&#39;</span></span>
<span class="line"><span>  #发邮件的邮箱用户名，也就是你的邮箱　　　　　</span></span>
<span class="line"><span>  smtp_auth_username: &#39;cdring@163.com&#39;</span></span>
<span class="line"><span>  #发邮件的邮箱密码</span></span>
<span class="line"><span>  smtp_auth_password: &#39;MONBUFHOQZPBXHGD&#39;</span></span>
<span class="line"><span>  #进行tls验证</span></span>
<span class="line"><span>  smtp_require_tls: false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>templates:</span></span>
<span class="line"><span>  - &#39;/etc/alertmanager/template/*.tmpl&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>route:</span></span>
<span class="line"><span>  group_by: [&#39;alertname&#39;]</span></span>
<span class="line"><span>  # 当收到告警的时候，等待group_wait配置的时间，看是否还有告警，如果有就一起发出去</span></span>
<span class="line"><span>  group_wait: 10s</span></span>
<span class="line"><span>  #  如果上次告警信息发送成功，此时又来了一个新的告警数据，则需要等待group_interval配置的时间才可以发送出去</span></span>
<span class="line"><span>  group_interval: 10s</span></span>
<span class="line"><span>  # 如果上次告警信息发送成功，且问题没有解决，则等待 repeat_interval配置的时间再次发送告警数据</span></span>
<span class="line"><span>  repeat_interval: 10m</span></span>
<span class="line"><span>  # 全局报警组，这个参数是必选的</span></span>
<span class="line"><span>  receiver: email_dingtalk</span></span>
<span class="line"><span></span></span>
<span class="line"><span>receivers:</span></span>
<span class="line"><span>- name: &#39;email_dingtalk&#39;</span></span>
<span class="line"><span>  #收邮件的邮箱</span></span>
<span class="line"><span>  email_configs:</span></span>
<span class="line"><span>  - to: &#39;cdring@163.com&#39;</span></span>
<span class="line"><span>    html: &#39;{{ template &quot;email.html&quot; .}}&#39; </span></span>
<span class="line"><span>    send_resolved: true</span></span>
<span class="line"><span>  webhook_configs:</span></span>
<span class="line"><span>  - url: &#39;http://192.168.11.61:8060/dingtalk/webhook1/send&#39;</span></span>
<span class="line"><span>    send_resolved: true</span></span>
<span class="line"><span>- name: &#39;wechat&#39;</span></span>
<span class="line"><span>  webhook_configs:</span></span>
<span class="line"><span>  - url: &#39;http://192.168.11.61:5000&#39;</span></span>
<span class="line"><span>    send_resolved: true</span></span>
<span class="line"><span>- name: &#39;ca&#39;</span></span>
<span class="line"><span>  webhook_configs:</span></span>
<span class="line"><span>  - url: &#39;http://api.aiops.com/alert/api/event/prometheus/cd0ffd35ec9a4ac88dc944dc470d603b&#39;</span></span>
<span class="line"><span>    send_resolved: true</span></span>
<span class="line"><span>inhibit_rules:</span></span>
<span class="line"><span> - source_match:</span></span>
<span class="line"><span>     severity: &#39;critical&#39;</span></span>
<span class="line"><span>   target_match:</span></span>
<span class="line"><span>     severity: &#39;warning&#39;</span></span>
<span class="line"><span>   equal: [&#39;alertname&#39;, &#39;dev&#39;, &#39;instance&#39;]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、配置告警规则-触发器" tabindex="-1"><a class="header-anchor" href="#_3、配置告警规则-触发器"><span>3、配置告警规则（触发器）</span></a></h2><p><a href="https://awesome-prometheus-alerts.grep.to/rules.html#host-and-hardware" target="_blank" rel="noopener noreferrer">https://awesome-prometheus-alerts.grep.to/rules.html#host-and-hardware</a></p>`,9),p=[l];function t(r,d){return a(),n("div",null,p)}const m=s(i,[["render",t],["__file","5.9.告警通知总结.html.vue"]]),v=JSON.parse('{"path":"/note/Prometheus/5.9.%E5%91%8A%E8%AD%A6%E9%80%9A%E7%9F%A5%E6%80%BB%E7%BB%93.html","title":"5.9.告警通知总结","lang":"zh-CN","frontmatter":{"title":"5.9.告警通知总结","order":35,"icon":"lightbulb","description":"1、告警通知总结 生产建议 最好选2个告警通知。如果很重要的可以设置电话告警，因为微信，钉钉信息很多人不看。但是来电话了基本都会看下 2、配置总结 配置如下： 3、配置告警规则（触发器） https://awesome-prometheus-alerts.grep.to/rules.html#host-and-hardware","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/vuepress/note/Prometheus/5.9.%E5%91%8A%E8%AD%A6%E9%80%9A%E7%9F%A5%E6%80%BB%E7%BB%93.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"5.9.告警通知总结"}],["meta",{"property":"og:description","content":"1、告警通知总结 生产建议 最好选2个告警通知。如果很重要的可以设置电话告警，因为微信，钉钉信息很多人不看。但是来电话了基本都会看下 2、配置总结 配置如下： 3、配置告警规则（触发器） https://awesome-prometheus-alerts.grep.to/rules.html#host-and-hardware"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"5.9.告警通知总结\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[{"level":2,"title":"1、告警通知总结","slug":"_1、告警通知总结","link":"#_1、告警通知总结","children":[]},{"level":2,"title":"2、配置总结","slug":"_2、配置总结","link":"#_2、配置总结","children":[]},{"level":2,"title":"3、配置告警规则（触发器）","slug":"_3、配置告警规则-触发器","link":"#_3、配置告警规则-触发器","children":[]}],"git":{},"readingTime":{"minutes":1.16,"words":348},"filePathRelative":"note/Prometheus/5.9.告警通知总结.md","autoDesc":true}');export{m as comp,v as data};
