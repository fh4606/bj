import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,o as n,d as e}from"./app-CdRwZrpj.js";const i="/assets/2023-10-28_210234_8652450.42418697834593855-Cs7EA-AL.png",l="/assets/2023-10-28_210235_1863110.16942224458123212-Blgw60dV.png",p="/assets/2023-10-28_210234_9972560.45115298299827455-w8Vyx8s6.png",t="/assets/2023-10-28_210235_2263740.5627726061562945-DzJFhMF9.png",r={},d=e('<h1 id="一、环境介绍" tabindex="-1"><a class="header-anchor" href="#一、环境介绍"><span>一、环境介绍</span></a></h1><table id="a04f6509" class="ne-table" style="table-layout:fixed;border-collapse:collapse;border:1px solid #d9d9d9;width:748px;"><tbody><tr style="height:33px;"><td width="187" style="border:1px solid #d9d9d9;"><p id="uf62b4818" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">主机名</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="u5677dfd5" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">IP地址</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="uebf767e6" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">系统</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="ufb5c50f7" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">说明</span></p></td></tr><tr style="height:33px;"><td width="187" style="border:1px solid #d9d9d9;"><p id="u99d6c8d9" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">localhost</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="u2225a3a6" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">192.168.11.61</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="uf6b12b88" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">Ubuntu 20.04</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="ub3561518" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">docker方式安装的prometheus</span></p></td></tr></tbody></table><h1 id="二、配置邮箱报警" tabindex="-1"><a class="header-anchor" href="#二、配置邮箱报警"><span>二、配置邮箱报警</span></a></h1><h2 id="_1、获取邮箱授权码并开启smtp服务" tabindex="-1"><a class="header-anchor" href="#_1、获取邮箱授权码并开启smtp服务"><span>1、获取邮箱授权码并开启smtp服务</span></a></h2><p><a href="https://mail.163.com/" target="_blank" rel="noopener noreferrer">https://mail.163.com/</a> 登陆自己的163账号</p><figure><img src="'+i+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Pop3/smtp/imap服务，点开启。弹出来扫描二维码点框。手机扫描发送短信。获取授权码</p><figure><img src="'+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>弹出来的框，复制授权码。就是用于第三方登录163邮箱的密码</p><p>MONBUFHOQZPBXHGD</p><h2 id="_2、修改alertmanager配置" tabindex="-1"><a class="header-anchor" href="#_2、修改alertmanager配置"><span>2、修改alertmanager配置</span></a></h2><p>修改alertmanager配置文件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#二进制安装修改/opt/alertmanager/alertmanager.yml</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#docker安装修改</span></span>
<span class="line"><span>cd /data/docker-prometheus</span></span>
<span class="line"><span></span></span>
<span class="line"><span>vim alertmanager/alertmanager.yml</span></span>
<span class="line"><span>#填入如下内容：</span></span>
<span class="line"><span>global:</span></span>
<span class="line"><span>  #163服务器</span></span>
<span class="line"><span>  smtp_smarthost: &#39;smtp.163.com:465&#39;</span></span>
<span class="line"><span>  #发邮件的邮箱</span></span>
<span class="line"><span>  smtp_from: &#39;cdring@163.com&#39;</span></span>
<span class="line"><span>  #发邮件的邮箱用户名，也就是你的邮箱　　　　　</span></span>
<span class="line"><span>  smtp_auth_username: &#39;cdring@163.com&#39;</span></span>
<span class="line"><span>  #发邮件的邮箱密码</span></span>
<span class="line"><span>  smtp_auth_password: &#39;your-password&#39;</span></span>
<span class="line"><span>  #tls验证配置，false为关闭</span></span>
<span class="line"><span>  smtp_require_tls: false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>route:</span></span>
<span class="line"><span>  group_by: [&#39;alertname&#39;]</span></span>
<span class="line"><span>  # 当收到告警的时候，等待group_wait配置的时间10s，看是否还有告警，如果有就一起发出去</span></span>
<span class="line"><span>  group_wait: 10s</span></span>
<span class="line"><span>  #  如果上次告警信息发送成功，此时又来了一个新的告警数据，则需要等待group_interval配置的时间才可以发送出去</span></span>
<span class="line"><span>  group_interval: 10s</span></span>
<span class="line"><span>  # 如果上次告警信息发送成功，且问题没有解决，则等待 repeat_interval配置的时间再次发送告警数据</span></span>
<span class="line"><span>  repeat_interval: 4h</span></span>
<span class="line"><span>  # 全局报警组，这个参数是必选的，和下面报警组名要相同</span></span>
<span class="line"><span>  receiver: &#39;email&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>receivers:</span></span>
<span class="line"><span>- name: &#39;email&#39;</span></span>
<span class="line"><span>  #收邮件的邮箱</span></span>
<span class="line"><span>  email_configs:</span></span>
<span class="line"><span>  - to: &#39;cdring@163.com&#39;</span></span>
<span class="line"><span>    send_resolved: true</span></span>
<span class="line"><span>inhibit_rules:</span></span>
<span class="line"><span> - source_match:</span></span>
<span class="line"><span>     severity: &#39;critical&#39;</span></span>
<span class="line"><span>   target_match:</span></span>
<span class="line"><span>     severity: &#39;warning&#39;</span></span>
<span class="line"><span>   equal: [&#39;alertname&#39;, &#39;dev&#39;, &#39;instance&#39;]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>多个收邮件的邮箱账号配置,如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>receivers:</span></span>
<span class="line"><span>- name: &#39;email&#39;</span></span>
<span class="line"><span> #收邮件的邮箱</span></span>
<span class="line"><span>  email_configs:</span></span>
<span class="line"><span>  - to: &#39;user1@example.com&#39;</span></span>
<span class="line"><span>  - to: &#39;user2@example.com&#39;</span></span>
<span class="line"><span>  - to: &#39;user3@example.com&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>检查</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>cat alertmanager/alertmanager.yml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>重启alertmanager或者重新加载配置</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#重载</span></span>
<span class="line"><span>curl -X POST http://localhost:9093/-/reload</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>检查</p><p><a href="http://192.168.11.61:9093/#/status" target="_blank" rel="noopener noreferrer">http://192.168.11.61:9093/#/status</a></p><h2 id="_3、配置触发器" tabindex="-1"><a class="header-anchor" href="#_3、配置触发器"><span>3、配置触发器</span></a></h2><p>查看现有触发器</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>cat prometheus/alert.yml</span></span>
<span class="line"><span>#增加如下内容</span></span>
<span class="line"><span>groups:</span></span>
<span class="line"><span>- name: Prometheus alert</span></span>
<span class="line"><span>  rules:</span></span>
<span class="line"><span>  # 对任何实例超过30秒无法联系的情况发出警报</span></span>
<span class="line"><span>  - alert: 服务告警</span></span>
<span class="line"><span>    expr: up == 0</span></span>
<span class="line"><span>    for: 30s</span></span>
<span class="line"><span>    labels:</span></span>
<span class="line"><span>      severity: critical</span></span>
<span class="line"><span>    annotations:</span></span>
<span class="line"><span>      instance: &quot;{{ $labels.instance }}&quot;</span></span>
<span class="line"><span>      description: &quot;{{ $labels.job }} 服务已关闭&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="访问告警模块的web页面" tabindex="-1"><a class="header-anchor" href="#访问告警模块的web页面"><span>访问告警模块的web页面</span></a></h3><p><a href="http://192.168.11.61:9090/alerts" target="_blank" rel="noopener noreferrer">http://192.168.11.61:9090/alerts</a></p><ul><li><p>INACTIVE：活跃中，即表示正常无告警产生。</p></li><li><p>PENDING：待触发，表示已经达到预设的阈值，但没达到预设的时间。</p></li><li><p>FIRING：表示达到预设的阈值并超过预设的时间触发告警</p></li></ul><h1 id="三、测试告警是否正常" tabindex="-1"><a class="header-anchor" href="#三、测试告警是否正常"><span>三、测试告警是否正常</span></a></h1><h2 id="_1、停止node-exporter" tabindex="-1"><a class="header-anchor" href="#_1、停止node-exporter"><span>1、停止node-exporter</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#docker环境</span></span>
<span class="line"><span>docker stop node-exporter</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#二进制安装环境</span></span>
<span class="line"><span>systemctl stop node_exporter</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、prometheus查看" tabindex="-1"><a class="header-anchor" href="#_2、prometheus查看"><span>2、prometheus查看</span></a></h2><p>浏览器打开prometheus web管理页面--点击<code>Alerts,</code><img src="`+p+'" alt="" loading="lazy"></p><h2 id="_3、检查alertmanager的alerts" tabindex="-1"><a class="header-anchor" href="#_3、检查alertmanager的alerts"><span>3、检查alertmanager的alerts</span></a></h2><p><a href="http://192.168.11.61:9093/#/alerts" target="_blank" rel="noopener noreferrer">http://192.168.11.61:9093/#/alerts</a></p><h2 id="_4、检查邮箱" tabindex="-1"><a class="header-anchor" href="#_4、检查邮箱"><span>4、检查邮箱</span></a></h2><p>登陆163邮箱查看邮件</p><figure><img src="'+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_5、如果没收到钉钉消息-排查" tabindex="-1"><a class="header-anchor" href="#_5、如果没收到钉钉消息-排查"><span>5、如果没收到钉钉消息，排查</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>docker logs -f alertmanager</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h1 id="四、使用模版-非必需" tabindex="-1"><a class="header-anchor" href="#四、使用模版-非必需"><span>四、使用模版(非必需)</span></a></h1><ul><li>看需求--不使用模版默认也行。</li></ul><h2 id="_1、创建模版文件" tabindex="-1"><a class="header-anchor" href="#_1、创建模版文件"><span>1、创建模版文件</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>cd /data/docker-prometheus</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>#创建存放模版的目录</span></span>
<span class="line"><span>mkdir alertmanager/template</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过cat创建</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>cat &gt; alertmanager/template/email.tmpl &lt;&lt;&quot;EOF&quot; </span></span>
<span class="line"><span>{{ define &quot;email.html&quot; }}</span></span>
<span class="line"><span>{{- if gt (len .Alerts.Firing) 0 -}}{{ range .Alerts }}</span></span>
<span class="line"><span>&lt;h2&gt;@告警通知&lt;/h2&gt;</span></span>
<span class="line"><span>告警程序: prometheus_alert &lt;br&gt;</span></span>
<span class="line"><span>告警级别: {{ .Labels.severity }} 级 &lt;br&gt;</span></span>
<span class="line"><span>告警类型: {{ .Labels.alertname }} &lt;br&gt;</span></span>
<span class="line"><span>故障主机: {{ .Labels.instance }} &lt;br&gt;</span></span>
<span class="line"><span>告警主题: {{ .Annotations.summary }} &lt;br&gt;</span></span>
<span class="line"><span>告警详情: {{ .Annotations.description }} &lt;br&gt;</span></span>
<span class="line"><span>触发时间: {{ .StartsAt.Local.Format &quot;2006-01-02 15:04:05&quot; }} &lt;br&gt;</span></span>
<span class="line"><span>{{ end }}{{ end -}}</span></span>
<span class="line"><span>{{- if gt (len .Alerts.Resolved) 0 -}}{{ range .Alerts }}</span></span>
<span class="line"><span>&lt;h2&gt;@告警恢复&lt;/h2&gt;</span></span>
<span class="line"><span>告警程序: prometheus_alert &lt;br&gt;</span></span>
<span class="line"><span>故障主机: {{ .Labels.instance }}&lt;br&gt;</span></span>
<span class="line"><span>故障主题: {{ .Annotations.summary }}&lt;br&gt;</span></span>
<span class="line"><span>告警详情: {{ .Annotations.description }}&lt;br&gt;</span></span>
<span class="line"><span>告警时间: {{ .StartsAt.Local.Format &quot;2006-01-02 15:04:05&quot; }}&lt;br&gt;</span></span>
<span class="line"><span>恢复时间: {{ .EndsAt.Local.Format &quot;2006-01-02 15:04:05&quot; }}&lt;br&gt;</span></span>
<span class="line"><span>{{ end }}{{ end -}}</span></span>
<span class="line"><span>{{- end }}</span></span>
<span class="line"><span>EOF</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>检查</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>vim alertmanager/template/email.tmpl</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_2、修改alertmanager配置-1" tabindex="-1"><a class="header-anchor" href="#_2、修改alertmanager配置-1"><span>2、修改alertmanager配置</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>vim alertmanager/config.yml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>增加html这行</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#模版配置</span></span>
<span class="line"><span>templates:</span></span>
<span class="line"><span>  - &#39;/etc/alertmanager/template/*.tmpl&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>....</span></span>
<span class="line"><span></span></span>
<span class="line"><span>receivers:</span></span>
<span class="line"><span>- name: &#39;email&#39;</span></span>
<span class="line"><span>  #收邮件的邮箱</span></span>
<span class="line"><span>  email_configs:</span></span>
<span class="line"><span>  - to: &#39;cdring@163.com&#39;</span></span>
<span class="line"><span>    #发送邮件的内容（调用模板文件中的）</span></span>
<span class="line"><span>    html: &#39;{{ template &quot;email.html&quot; .}}&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重载配置</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>curl -X POST http://localhost:9093/-/reload</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>检查</p><p><a href="http://192.168.11.61:9093/#/status" target="_blank" rel="noopener noreferrer">http://192.168.11.61:9093/#/status</a></p><h2 id="_3、测试" tabindex="-1"><a class="header-anchor" href="#_3、测试"><span>3、测试</span></a></h2><p>163邮件报警，修改前和修改后的区别如下图：</p><figure><img src="https://cdn.nlark.com/yuque/0/2023/png/22475872/1688098487573-bf3a14bf-68fe-4249-875d-62115fb7d914.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_55%2Ctext_5p6X5ZOlTGludXg%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,58),c=[d];function h(m,o){return n(),a("div",null,c)}const b=s(r,[["render",h],["__file","5.3.163邮箱告警.html.vue"]]),g=JSON.parse('{"path":"/note/Prometheus/5.3.163%E9%82%AE%E7%AE%B1%E5%91%8A%E8%AD%A6.html","title":"5.3.163邮箱告警","lang":"zh-CN","frontmatter":{"title":"5.3.163邮箱告警","order":29,"icon":"lightbulb","description":"一、环境介绍 二、配置邮箱报警 1、获取邮箱授权码并开启smtp服务 https://mail.163.com/ 登陆自己的163账号 Pop3/smtp/imap服务，点开启。弹出来扫描二维码点框。手机扫描发送短信。获取授权码 弹出来的框，复制授权码。就是用于第三方登录163邮箱的密码 MONBUFHOQZPBXHGD 2、修改alertmanage...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/note/Prometheus/5.3.163%E9%82%AE%E7%AE%B1%E5%91%8A%E8%AD%A6.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"5.3.163邮箱告警"}],["meta",{"property":"og:description","content":"一、环境介绍 二、配置邮箱报警 1、获取邮箱授权码并开启smtp服务 https://mail.163.com/ 登陆自己的163账号 Pop3/smtp/imap服务，点开启。弹出来扫描二维码点框。手机扫描发送短信。获取授权码 弹出来的框，复制授权码。就是用于第三方登录163邮箱的密码 MONBUFHOQZPBXHGD 2、修改alertmanage..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.nlark.com/yuque/0/2023/png/22475872/1688098487573-bf3a14bf-68fe-4249-875d-62115fb7d914.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_55%2Ctext_5p6X5ZOlTGludXg%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"5.3.163邮箱告警\\",\\"image\\":[\\"https://cdn.nlark.com/yuque/0/2023/png/22475872/1688098487573-bf3a14bf-68fe-4249-875d-62115fb7d914.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_55%2Ctext_5p6X5ZOlTGludXg%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[{"level":2,"title":"1、获取邮箱授权码并开启smtp服务","slug":"_1、获取邮箱授权码并开启smtp服务","link":"#_1、获取邮箱授权码并开启smtp服务","children":[]},{"level":2,"title":"2、修改alertmanager配置","slug":"_2、修改alertmanager配置","link":"#_2、修改alertmanager配置","children":[]},{"level":2,"title":"3、配置触发器","slug":"_3、配置触发器","link":"#_3、配置触发器","children":[{"level":3,"title":"访问告警模块的web页面","slug":"访问告警模块的web页面","link":"#访问告警模块的web页面","children":[]}]},{"level":2,"title":"1、停止node-exporter","slug":"_1、停止node-exporter","link":"#_1、停止node-exporter","children":[]},{"level":2,"title":"2、prometheus查看","slug":"_2、prometheus查看","link":"#_2、prometheus查看","children":[]},{"level":2,"title":"3、检查alertmanager的alerts","slug":"_3、检查alertmanager的alerts","link":"#_3、检查alertmanager的alerts","children":[]},{"level":2,"title":"4、检查邮箱","slug":"_4、检查邮箱","link":"#_4、检查邮箱","children":[]},{"level":2,"title":"5、如果没收到钉钉消息，排查","slug":"_5、如果没收到钉钉消息-排查","link":"#_5、如果没收到钉钉消息-排查","children":[]},{"level":2,"title":"1、创建模版文件","slug":"_1、创建模版文件","link":"#_1、创建模版文件","children":[]},{"level":2,"title":"2、修改alertmanager配置","slug":"_2、修改alertmanager配置-1","link":"#_2、修改alertmanager配置-1","children":[]},{"level":2,"title":"3、测试","slug":"_3、测试","link":"#_3、测试","children":[]}],"git":{},"readingTime":{"minutes":4.23,"words":1268},"filePathRelative":"note/Prometheus/5.3.163邮箱告警.md","autoDesc":true}');export{b as comp,g as data};
