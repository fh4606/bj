import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as e,e as a}from"./app-yH_6ilSD.js";const i="/bj/assets/2023-10-28_210353_6567880.11315179092331107-BBPMpe4l.png",l="/bj/assets/2023-10-28_210353_5073210.08523252984584351-D3GHJA4i.png",r="/bj/assets/2023-10-28_210353_5815300.637264161768585-lAVpgMNV.png",p={},t=a(`<h2 id="_1、抑制机制" tabindex="-1"><a class="header-anchor" href="#_1、抑制机制"><span>1、抑制机制</span></a></h2><p>Alertmanager的抑制机制可以避免当某种问题告警产生之后用户接收到大量由此问题导致的一系列的其它告警通知。例如当集群不可用时，用户可能只希望接收到一条告警，告诉他这时候集群出现了问题，而不是大量的如集群中的应用异常、中间件服务异常的告警通知。</p><p>在Alertmanager配置文件中，使用inhibit_rules定义一组告警的抑制规则：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>inhibit_rules:</span></span>
<span class="line"><span>  [ - &lt;inhibit_rule&gt; ... ]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>每一条抑制规则的具体配置如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>target_match:</span></span>
<span class="line"><span>  [ &lt;labelname&gt;: &lt;labelvalue&gt;, ... ]</span></span>
<span class="line"><span>target_match_re:</span></span>
<span class="line"><span>  [ &lt;labelname&gt;: &lt;regex&gt;, ... ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>source_match:</span></span>
<span class="line"><span>  [ &lt;labelname&gt;: &lt;labelvalue&gt;, ... ]</span></span>
<span class="line"><span>source_match_re:</span></span>
<span class="line"><span>  [ &lt;labelname&gt;: &lt;regex&gt;, ... ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[ equal: &#39;[&#39; &lt;labelname&gt;, ... &#39;]&#39; ]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当已经发送的告警通知匹配到target_match和target_match_re规则，当有新的告警规则如果满足source_match或者定义的匹配规则，并且已发送的告警与新产生的告警中equal定义的标签完全相同，则启动抑制机制，新的告警不会发送。</p><h3 id="具体配置" tabindex="-1"><a class="header-anchor" href="#具体配置"><span>具体配置</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>inhibit_rules:</span></span>
<span class="line"><span> - source_match:</span></span>
<span class="line"><span>     severity: &#39;critical&#39;</span></span>
<span class="line"><span>   target_match:</span></span>
<span class="line"><span>     severity: &#39;warning&#39;</span></span>
<span class="line"><span>   equal: [&#39;alertname&#39;, &#39;dev&#39;, &#39;instance&#39;]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在alertname、dev、instance 三个标签的值相同情况下，critaical 的报警会抑制 warning 级别的报警信息。</p><h2 id="_2、临时静默" tabindex="-1"><a class="header-anchor" href="#_2、临时静默"><span>2、临时静默</span></a></h2><p>除了基于抑制机制可以控制告警通知的行为以外，用户或者管理员还可以直接通过Alertmanager的UI临时屏蔽特定的告警通知。通过定义标签的匹配规则(字符串或者正则表达式)，如果新的告警通知满足静默规则的设置，则停止向receiver发送通知。</p><p>用于停机维护，或者有一个不需要处理的告警信息</p><h3 id="创建静默规则" tabindex="-1"><a class="header-anchor" href="#创建静默规则"><span>创建静默规则</span></a></h3><p>进入Alertmanager UI，点击&quot;Silences&quot;---在点右上角的&quot;New Silence&quot;显示如下内容：</p><figure><img src="`+i+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>定义静默规则的开始时间以及持续时间和结束时间，通过Matchers部分可以设置多条匹配规则(字符串匹配或者正则匹配)。填写当前静默规则的创建者以及创建原因后，点击&quot;Create&quot;按钮即可。</p><p>通过&quot;Preview Alerts&quot;可以查看预览当前匹配规则匹配到的告警信息。静默规则创建成功后，Alertmanager会开始加载该规则并且设置状态为Pending,当规则生效后则进行到Active状态。</p><h3 id="查看静默规则" tabindex="-1"><a class="header-anchor" href="#查看静默规则"><span>查看静默规则</span></a></h3><p>点击”silences“在“Active”查看正在运行的静默规则</p><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="匹配的告警信息失效" tabindex="-1"><a class="header-anchor" href="#匹配的告警信息失效"><span>匹配的告警信息失效</span></a></h3><p>当静默规则生效以后，从Alertmanager的Alerts页面下用户将不会看到该规则匹配到的告警信息。</p><figure><img src="'+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="取消静默规则" tabindex="-1"><a class="header-anchor" href="#取消静默规则"><span>取消静默规则</span></a></h3><p>对于已经生效的规则，用户可以通过手动点击”Expire“按钮使当前规则过期。</p><h2 id="_3、路由匹配" tabindex="-1"><a class="header-anchor" href="#_3、路由匹配"><span>3、路由匹配</span></a></h2><p>每一个告警都会从配置文件中顶级的route进入路由树，需要注意的是顶级的route必须匹配所有告警(即不能有任何的匹配设置match和match_re)，每一个路由都可以定义自己的接受人以及匹配规则。默认情况下，告警进入到顶级route后会遍历所有的子节点，直到找到最深的匹配route，并将告警发送到该route定义的receiver中。但如果route中设置<strong>continue</strong>的值为false，那么告警在匹配到第一个子节点之后就直接停止。如果<strong>continue</strong>为true，报警则会继续进行后续子节点的匹配。如果当前告警匹配不到任何的子节点，那该告警将会基于当前路由节点的接收器配置方式进行处理。</p><p>其中告警的匹配有两种方式可以选择。一种方式基于字符串验证，通过设置<strong>match</strong>规则判断当前告警中是否存在标签labelname并且其值等于labelvalue。第二种方式则基于正则表达式，通过设置<strong>match_re</strong>验证当前告警标签的值是否满足正则表达式的内容。</p><p>如果警报已经成功发送通知, 如果想设置发送告警通知之前要等待时间，则可以通过<strong>repeat_interval</strong>参数进行设置。</p><h3 id="案例1" tabindex="-1"><a class="header-anchor" href="#案例1"><span>案例1</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>route:</span></span>
<span class="line"><span>  group_by: [&#39;alertname&#39;]             //定义分组,根据label标签进行分组</span></span>
<span class="line"><span>  group_wait: 10s                     //分组等待时间，也就是说在10秒内同一个组中有没有一起报警的，如果有则同时发出报警邮件，也就是有2个报警同时发在一个邮件</span></span>
<span class="line"><span>  group_interval: 10s                 //告警时间间隔</span></span>
<span class="line"><span>  repeat_interval: 10m                //重复告警间隔，也就是触发的一个告警在10分钟内没有处理则再次发一封邮件。</span></span>
<span class="line"><span>  continue: false                     //若路由上的continue字段的值为false，则遇到第一个匹配的路由分支后即终止。否则，将继续匹配后续的子节点;</span></span>
<span class="line"><span>  receiver: &#39;receiver-01&#39;             //默认邮箱</span></span>
<span class="line"><span>  routes:                             //启用一个子路由</span></span>
<span class="line"><span>  - receiver: &#39;receiver-dba&#39;          //接收者为receiver-dba</span></span>
<span class="line"><span>    group_wait: 10s                   //分组等待时间</span></span>
<span class="line"><span>    match_re:         	              //匹配一个正则</span></span>
<span class="line"><span>      service: mysql|db	              //service标签包含mysql和db的统一发送给dba的邮箱</span></span>
<span class="line"><span>    continue: false                   //若路由上的continue字段的值为false，则遇到第一个匹配的路由分支后即终止。否则，将继续匹配后续的子节点;</span></span>
<span class="line"><span>  - receiver: &#39;receiver-01&#39;           //接收者为receiver-01</span></span>
<span class="line"><span>    group_wait: 10s                   //分组时间</span></span>
<span class="line"><span>    match:         </span></span>
<span class="line"><span>      serverity: error                //将serverity标签值包含error的发送给yunwei的邮箱</span></span>
<span class="line"><span>    continue: false                   //若路由上的continue字段的值为false，则遇到第一个匹配的路由分支后即终止。否则，将继续匹配后续的子节点;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>receivers:                            //定义接收者的邮箱</span></span>
<span class="line"><span>- name: &#39;receiver-01&#39;                 //接收者名字，要和routes中的receiver对应</span></span>
<span class="line"><span>  email_configs:				</span></span>
<span class="line"><span>  - to: &#39;11111@qq.com&#39;                //receiver-01的邮箱地址</span></span>
<span class="line"><span>- name: &#39;receiver-dba&#39;                //接收者名字，要和routes中的receiver对应</span></span>
<span class="line"><span>  email_configs:		</span></span>
<span class="line"><span>  - to: &#39;2222@qq.com&#39;                 //receiver-dba的邮箱地址</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="案例2" tabindex="-1"><a class="header-anchor" href="#案例2"><span>案例2</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>route:</span></span>
<span class="line"><span>  group_by: [&#39;instance&#39;]          # 根据 instance 标签分组</span></span>
<span class="line"><span>  continue: true                  # 为true则还需要去匹配子路由。</span></span>
<span class="line"><span>  receiver: receiver-01</span></span>
<span class="line"><span>  routes:</span></span>
<span class="line"><span>  - receiver: &#39;receiver-01&#39;</span></span>
<span class="line"><span>    match:</span></span>
<span class="line"><span>      alertname: &#39;InstanceDown&#39;   # 告警的名字是 InstanceDown 则发送给 receiver-03</span></span>
<span class="line"><span>  - receiver: &#39;webchat&#39;</span></span>
<span class="line"><span>    match_re:</span></span>
<span class="line"><span>      alertname: &#39;Cpu.*&#39;          # 告警的名字以 Cpu开头的 则发送给 webchat</span></span>
<span class="line"><span>  - receiver: &#39;dingtalk&#39;</span></span>
<span class="line"><span>    match:</span></span>
<span class="line"><span>      alertname: &#39;InstanceDown&#39;   # 告警的名字是 InstanceDown 则发送给 dingtalk</span></span>
<span class="line"><span>receivers:                        </span></span>
<span class="line"><span>- name: &#39;receiver-01&#39;                     </span></span>
<span class="line"><span>  email_configs:				</span></span>
<span class="line"><span>  - to: &#39;1111@qq.com&#39;               </span></span>
<span class="line"><span>- name: &#39;webchat&#39;</span></span>
<span class="line"><span>  webhook_configs:</span></span>
<span class="line"><span>  - url: &#39;http://192.168.11.61:5000&#39;</span></span>
<span class="line"><span>    send_resolved: true</span></span>
<span class="line"><span>- name: &#39;dingtalk&#39;</span></span>
<span class="line"><span>  webhook_configs:</span></span>
<span class="line"><span>  - url: &#39;http://192.168.11.61:8060/dingtalk/webhook1/send&#39;</span></span>
<span class="line"><span>    send_resolved: true</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4、告警分组" tabindex="-1"><a class="header-anchor" href="#_4、告警分组"><span>4、告警分组</span></a></h2><p>在之前的部分有讲过，Alertmanager可以对告警通知进行分组，将多条告警合合并为一个通知。这里我们可以使用<strong>group_by</strong>来定义分组规则。基于告警中包含的标签，如果满足<strong>group_by</strong>中定义标签名称，那么这些告警将会合并为一个通知发送给接收器。</p><p>有的时候为了能够一次性收集和发送更多的相关信息时，可以通过<strong>group_wait</strong>参数设置等待时间，如果在等待时间内当前group接收到了新的告警，这些告警将会合并为一个通知向receiver发送。</p><p>而<strong>group_interval</strong>配置，则用于定义相同的Group之间发送告警通知的时间间隔。</p><p>例如，当使用Prometheus监控多个集群以及部署在集群中的应用和数据库服务，并且定义以下的告警处理路由规则来对集群中的异常进行通知。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>route:</span></span>
<span class="line"><span>  receiver: &#39;default-receiver&#39;</span></span>
<span class="line"><span>  group_wait: 30s</span></span>
<span class="line"><span>  group_interval: 5m</span></span>
<span class="line"><span>  repeat_interval: 4h</span></span>
<span class="line"><span>  group_by: [cluster, alertname]</span></span>
<span class="line"><span>  routes:</span></span>
<span class="line"><span>  - receiver: &#39;database-pager&#39;</span></span>
<span class="line"><span>    group_wait: 10s</span></span>
<span class="line"><span>    match_re:</span></span>
<span class="line"><span>      service: mysql|cassandra</span></span>
<span class="line"><span>  - receiver: &#39;frontend-pager&#39;</span></span>
<span class="line"><span>    group_by: [product, environment]</span></span>
<span class="line"><span>    match:</span></span>
<span class="line"><span>      team: frontend</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认情况下所有的告警都会发送给集群管理员default-receiver，因此在Alertmanager的配置文件的根路由中，对告警信息按照集群以及告警的名称对告警进行分组。</p><p>如果告警时来源于数据库服务如MySQL或者Cassandra，此时则需要将告警发送给相应的数据库管理员(database-pager)。这里定义了一个单独子路由，如果告警中包含service标签，并且service为MySQL或者Cassandra,则向database-pager发送告警通知，由于这里没有定义group_by等属性，这些属性的配置信息将从上级路由继承，database-pager将会接收到按cluster和alertname进行分组的告警通知。</p><p>而某些告警规则来源可能来源于开发团队的定义，这些告警中通过添加标签team来标示这些告警的创建者。在Alertmanager配置文件的告警路由下，定义单独子路由用于处理这一类的告警通知，如果匹配到告警中包含标签team，并且team的值为frontend，Alertmanager将会按照标签product和environment对告警进行分组。此时如果应用出现异常，开发团队就能清楚的知道哪一个环境(environment)中的哪一个应用程序出现了问题，可以快速对应用进行问题定位。</p>`,43),c=[t];function d(v,u){return e(),s("div",null,c)}const h=n(p,[["render",d],["__file","5.8.Alertmanager抑制、静默、路由、告警分组.html.vue"]]),b=JSON.parse('{"path":"/note/Prometheus/5.8.Alertmanager%E6%8A%91%E5%88%B6%E3%80%81%E9%9D%99%E9%BB%98%E3%80%81%E8%B7%AF%E7%94%B1%E3%80%81%E5%91%8A%E8%AD%A6%E5%88%86%E7%BB%84.html","title":"5.8.Alertmanager抑制、静默、路由、告警分组","lang":"zh-CN","frontmatter":{"title":"5.8.Alertmanager抑制、静默、路由、告警分组","order":34,"icon":"lightbulb","description":"1、抑制机制 Alertmanager的抑制机制可以避免当某种问题告警产生之后用户接收到大量由此问题导致的一系列的其它告警通知。例如当集群不可用时，用户可能只希望接收到一条告警，告诉他这时候集群出现了问题，而不是大量的如集群中的应用异常、中间件服务异常的告警通知。 在Alertmanager配置文件中，使用inhibit_rules定义一组告警的抑制规...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/bj/note/Prometheus/5.8.Alertmanager%E6%8A%91%E5%88%B6%E3%80%81%E9%9D%99%E9%BB%98%E3%80%81%E8%B7%AF%E7%94%B1%E3%80%81%E5%91%8A%E8%AD%A6%E5%88%86%E7%BB%84.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"5.8.Alertmanager抑制、静默、路由、告警分组"}],["meta",{"property":"og:description","content":"1、抑制机制 Alertmanager的抑制机制可以避免当某种问题告警产生之后用户接收到大量由此问题导致的一系列的其它告警通知。例如当集群不可用时，用户可能只希望接收到一条告警，告诉他这时候集群出现了问题，而不是大量的如集群中的应用异常、中间件服务异常的告警通知。 在Alertmanager配置文件中，使用inhibit_rules定义一组告警的抑制规..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"5.8.Alertmanager抑制、静默、路由、告警分组\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[{"level":2,"title":"1、抑制机制","slug":"_1、抑制机制","link":"#_1、抑制机制","children":[{"level":3,"title":"具体配置","slug":"具体配置","link":"#具体配置","children":[]}]},{"level":2,"title":"2、临时静默","slug":"_2、临时静默","link":"#_2、临时静默","children":[{"level":3,"title":"创建静默规则","slug":"创建静默规则","link":"#创建静默规则","children":[]},{"level":3,"title":"查看静默规则","slug":"查看静默规则","link":"#查看静默规则","children":[]},{"level":3,"title":"匹配的告警信息失效","slug":"匹配的告警信息失效","link":"#匹配的告警信息失效","children":[]},{"level":3,"title":"取消静默规则","slug":"取消静默规则","link":"#取消静默规则","children":[]}]},{"level":2,"title":"3、路由匹配","slug":"_3、路由匹配","link":"#_3、路由匹配","children":[{"level":3,"title":"案例1","slug":"案例1","link":"#案例1","children":[]},{"level":3,"title":"案例2","slug":"案例2","link":"#案例2","children":[]}]},{"level":2,"title":"4、告警分组","slug":"_4、告警分组","link":"#_4、告警分组","children":[]}],"git":{},"readingTime":{"minutes":7.52,"words":2256},"filePathRelative":"note/Prometheus/5.8.Alertmanager抑制、静默、路由、告警分组.md","autoDesc":true}');export{h as comp,b as data};
