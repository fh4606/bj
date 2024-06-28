import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,d as n}from"./app-CdRwZrpj.js";const i="/assets/2023-10-28_210223_1054650.8372232264971284-D_YY_k2L.png",l="/assets/2023-10-28_210222_9819130.0064984206526282895-BQGbczvF.png",t="/assets/2023-10-28_210223_0457040.32229142549120204-4ZSPGWjc.png",r="/assets/2023-10-28_210223_4379560.08245305298389405-CKWkusLS.png",p={},d=n(`<h1 id="一、环境" tabindex="-1"><a class="header-anchor" href="#一、环境"><span>一、环境</span></a></h1><table id="c3e30562" class="ne-table" style="table-layout:fixed;border-collapse:collapse;border:1px solid #d9d9d9;width:748px;"><tbody><tr style="height:33px;"><td width="187" style="border:1px solid #d9d9d9;"><p id="u52845591" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">主机名</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="ua6fe3cb2" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">IP地址</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="u067c16f5" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">系统</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="u6b7be713" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">说明</span></p></td></tr><tr style="height:33px;"><td width="187" style="border:1px solid #d9d9d9;"><p id="uc8d5c6cb" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">localhost</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="u098e28a2" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">192.168.11.61</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="u4765b020" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">Ubuntu 20.04</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="uc1d1d8c3" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">docker安装的prometheus</span></p></td></tr></tbody></table><h2 id="_1、环境准备" tabindex="-1"><a class="header-anchor" href="#_1、环境准备"><span>1、环境准备</span></a></h2><h3 id="promethues安装" tabindex="-1"><a class="header-anchor" href="#promethues安装"><span>promethues安装</span></a></h3><p>略</p><h3 id="alertmanager安装" tabindex="-1"><a class="header-anchor" href="#alertmanager安装"><span>alertmanager安装</span></a></h3><p>略，之前已经安装好</p><h1 id="二、alertmanager配置概述" tabindex="-1"><a class="header-anchor" href="#二、alertmanager配置概述"><span>二、Alertmanager配置概述</span></a></h1><p>Alertmanager主要负责对Prometheus产生的告警进行统一处理，因此在Alertmanager配置中一般会包含以下几个主要部分：</p><ul><li><p>全局配置（global）：用于定义一些全局的公共参数，如全局的SMTP配置，Slack配置等内容；</p></li><li><p>模板（templates）：用于定义告警通知时的模板，如HTML模板，邮件模板等；</p></li><li><p>告警路由（route）：根据标签匹配，确定当前告警应该如何处理；</p></li><li><p>接收人（receivers）：接收人是一个抽象的概念，它可以是一个邮箱也可以是微信，Slack或者Webhook等，接收人一般配合告警路由使用；</p></li><li><p>抑制规则（inhibit_rules）：合理设置抑制规则可以减少垃圾告警的产生</p></li></ul><p>其完整配置格式如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>global:</span></span>
<span class="line"><span>  [ resolve_timeout: &lt;duration&gt; | default = 5m ]</span></span>
<span class="line"><span>  [ smtp_from: &lt;tmpl_string&gt; ] </span></span>
<span class="line"><span>  [ smtp_smarthost: &lt;string&gt; ] </span></span>
<span class="line"><span>  [ smtp_hello: &lt;string&gt; | default = &quot;localhost&quot; ]</span></span>
<span class="line"><span>  [ smtp_auth_username: &lt;string&gt; ]</span></span>
<span class="line"><span>  [ smtp_auth_password: &lt;secret&gt; ]</span></span>
<span class="line"><span>  [ smtp_auth_identity: &lt;string&gt; ]</span></span>
<span class="line"><span>  [ smtp_auth_secret: &lt;secret&gt; ]</span></span>
<span class="line"><span>  [ smtp_require_tls: &lt;bool&gt; | default = true ]</span></span>
<span class="line"><span>  [ slack_api_url: &lt;secret&gt; ]</span></span>
<span class="line"><span>  [ victorops_api_key: &lt;secret&gt; ]</span></span>
<span class="line"><span>  [ victorops_api_url: &lt;string&gt; | default = &quot;https://alert.victorops.com/integrations/generic/20131114/alert/&quot; ]</span></span>
<span class="line"><span>  [ pagerduty_url: &lt;string&gt; | default = &quot;https://events.pagerduty.com/v2/enqueue&quot; ]</span></span>
<span class="line"><span>  [ opsgenie_api_key: &lt;secret&gt; ]</span></span>
<span class="line"><span>  [ opsgenie_api_url: &lt;string&gt; | default = &quot;https://api.opsgenie.com/&quot; ]</span></span>
<span class="line"><span>  [ hipchat_api_url: &lt;string&gt; | default = &quot;https://api.hipchat.com/&quot; ]</span></span>
<span class="line"><span>  [ hipchat_auth_token: &lt;secret&gt; ]</span></span>
<span class="line"><span>  [ wechat_api_url: &lt;string&gt; | default = &quot;https://qyapi.weixin.qq.com/cgi-bin/&quot; ]</span></span>
<span class="line"><span>  [ wechat_api_secret: &lt;secret&gt; ]</span></span>
<span class="line"><span>  [ wechat_api_corp_id: &lt;string&gt; ]</span></span>
<span class="line"><span>  [ http_config: &lt;http_config&gt; ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>templates:</span></span>
<span class="line"><span>  [ - &lt;filepath&gt; ... ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>route: &lt;route&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>receivers:</span></span>
<span class="line"><span>  - &lt;receiver&gt; ...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>inhibit_rules:</span></span>
<span class="line"><span>  [ - &lt;inhibit_rule&gt; ... ]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在全局配置中需要注意的是<code>resolve_timeout</code>，该参数定义了当Alertmanager持续多长时间未接收到告警后标记告警状态为resolved（已解决）。该参数的定义可能会影响到告警恢复通知的接收时间，读者可根据自己的实际场景进行定义，其默认值为5分钟。在接下来的部分，我们将已一些实际的例子解释Alertmanager的其它配置内容。</p><h1 id="三、prometheus告警规则" tabindex="-1"><a class="header-anchor" href="#三、prometheus告警规则"><span>三、Prometheus告警规则</span></a></h1><p>Prometheus中的告警规则允许你基于PromQL表达式定义告警触发条件，Prometheus后端对这些触发规则进行周期性计算，当满足触发条件后则会触发告警通知。默认情况下，用户可以通过Prometheus的Web界面查看这些告警规则以及告警的触发状态。当Promthues与Alertmanager关联之后，可以将告警发送到外部服务如Alertmanager中并通过Alertmanager可以对这些告警进行进一步的处理。</p><ul><li>告警规则是配置在prometheus服务器</li></ul><h2 id="_1、与alertmanager关联" tabindex="-1"><a class="header-anchor" href="#_1、与alertmanager关联"><span>1、与Alertmanager关联</span></a></h2><p>Prometheus把产生的告警发送给Alertmanager进行告警处理时，需要在Prometheus使用的配置文件中添加关联Alertmanager组件的对应配置内容。<br> 1）编辑prometheus.yml文件加入关联Alertmanager组件的访问地址，示例如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span># Alertmanager 配置</span></span>
<span class="line"><span>alerting:</span></span>
<span class="line"><span>  alertmanagers:</span></span>
<span class="line"><span>  - static_configs:</span></span>
<span class="line"><span>    - targets: [&#39;alertmanager:9093&#39;]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2）添加监控Alertmanager，让Prometheus去收集Alertmanager的监控指标。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>  - job_name: &#39;alertmanager&#39;</span></span>
<span class="line"><span>    # 覆盖全局默认值，每15秒从该作业中刮取一次目标</span></span>
<span class="line"><span>    scrape_interval: 15s</span></span>
<span class="line"><span>    static_configs:</span></span>
<span class="line"><span>    - targets: [&#39;alertmanager:9093&#39;]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3）重启prometheus</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>curl -X POST http://localhost:9090/-/reload</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>检查</p><figure><img src="`+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_2、配置告警规则" tabindex="-1"><a class="header-anchor" href="#_2、配置告警规则"><span>2、配置告警规则</span></a></h2><h3 id="安装node-exporter" tabindex="-1"><a class="header-anchor" href="#安装node-exporter"><span>安装node_exporter</span></a></h3><p>略</p><h3 id="prometheus添加配置" tabindex="-1"><a class="header-anchor" href="#prometheus添加配置"><span>Prometheus添加配置</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>  - job_name: &#39;node-exporter&#39;</span></span>
<span class="line"><span>    scrape_interval: 15s</span></span>
<span class="line"><span>    static_configs:</span></span>
<span class="line"><span>    - targets: [&#39;node_exporter:9100&#39;]</span></span>
<span class="line"><span>      labels:</span></span>
<span class="line"><span>        instance: Prometheus服务器</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建告警规则文件" tabindex="-1"><a class="header-anchor" href="#创建告警规则文件"><span>创建告警规则文件</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#进入到prometheus docker安装目录</span></span>
<span class="line"><span>cd /data/prometheus</span></span>
<span class="line"><span></span></span>
<span class="line"><span>vim prometheus/alert.yml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>告警规则配置如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>groups:</span></span>
<span class="line"><span>- name: Prometheus alert</span></span>
<span class="line"><span>  rules:</span></span>
<span class="line"><span>  # 对任何实例超过1分钟无法联系的情况发出警报</span></span>
<span class="line"><span>  - alert: 服务告警</span></span>
<span class="line"><span>    expr: up == 0</span></span>
<span class="line"><span>    for: 1m</span></span>
<span class="line"><span>    labels:</span></span>
<span class="line"><span>      severity: critical</span></span>
<span class="line"><span>    annotations:</span></span>
<span class="line"><span>      summary: &quot;服务异常,实例:{{ $labels.instance }}&quot;</span></span>
<span class="line"><span>      description: &quot;{{ $labels.job }} 服务已关闭&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在告警规则文件中，我们可以将一组相关的规则设置定义在一个group下。在每一个group中我们可以定义多个告警规则(rule)。一条告警规则主要由以下几部分组成：</p><ul><li><p>alert：告警规则的名称。</p></li><li><p>expr：基于PromQL表达式告警触发条件，用于计算是否有时间序列满足该条件。</p></li><li><p>for：评估等待时间，可选参数。用于表示只有当触发条件持续一段时间后才发送告警。在等待期间新产生告警的状态为pending。</p></li><li><p>labels：自定义标签，允许用户指定要附加到告警上的一组附加标签。</p></li><li><p>annotations：用于指定一组附加信息，比如用于描述告警详细信息的文字等，annotations的内容在告警产生时会一同作为参数发送到Alertmanager。</p></li></ul><h3 id="指定加载告警规则" tabindex="-1"><a class="header-anchor" href="#指定加载告警规则"><span>指定加载告警规则</span></a></h3><p>为了能够让Prometheus能够启用定义的告警规则，我们需要在Prometheus全局配置文件中通过<strong>rule_files</strong>指定一组告警规则文件的访问路径，Prometheus启动后会自动扫描这些路径下规则文件中定义的内容，并且根据这些规则计算是否向外部发送通知：</p><p>格式：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>rule_files:</span></span>
<span class="line"><span>  [ - &lt;filepath_glob&gt; ... ]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>具体配置</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span># 报警(触发器)配置</span></span>
<span class="line"><span>rule_files:</span></span>
<span class="line"><span>  - &quot;alert.yml&quot;</span></span>
<span class="line"><span>  - &quot;rules/*.yml&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重载配置文件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>curl -X POST http://localhost:9090/-/reload</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_3、查看告警状态" tabindex="-1"><a class="header-anchor" href="#_3、查看告警状态"><span>3、查看告警状态</span></a></h2><p>重启Prometheus后，用户可以通过Prometheus WEB界面中的<a href="http://192.168.11.61:9090/alerts" target="_blank" rel="noopener noreferrer">Alerts</a>菜单查看当前Prometheus下的所有告警规则，以及其当前所处的活动状态。</p><p>同时对于已经pending或者firing的告警，Prometheus也会将它们存储到时间序列ALERTS{}中。</p><p>可以通过表达式，查询告警实例：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>ALERTS{}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>样本值为1表示当前告警处于活动状态（pending或者firing），当告警从活动状态转换为非活动状态时，样本值则为0。</p><h2 id="_4、测试告警规则" tabindex="-1"><a class="header-anchor" href="#_4、测试告警规则"><span>4、测试告警规则</span></a></h2><p>在主机上运行以下命令：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>docker stop node-exporter</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Prometheus首次检测到满足触发条件后，由于告警规则中设置了1分钟（for: 1m）的等待时间，告警状态从<code>INACTIVE</code>变为<code>Pending</code>，如下图所示：</p><figure><img src="`+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如果1分钟后告警条件持续满足，告警状态从Penging变为FIRING，并且会把告警信息发送给<code>alertmanager</code>。如下图所示：</p><figure><img src="'+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>注：如果for: 0或者没有配置for，检测到满足触发条件，那告警状态从<code>INACTIVE</code>变为<code>FIRING</code>,把告警信息发送给<code>alertmanager</code></li></ul><p>alertmanager接收到告警信息如下图：</p><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_5、promql查询" tabindex="-1"><a class="header-anchor" href="#_5、promql查询"><span>5、Promql查询</span></a></h2><p><a href="http://192.168.11.61:9090/graph" target="_blank" rel="noopener noreferrer">http://192.168.11.61:9090/graph</a></p><p>Promql表达式</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>up == 0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>结果</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>up{instance=&quot;Prometheus服务器&quot;, job=&quot;node-exporter&quot;} 0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>',66),c=[d];function h(o,u){return a(),s("div",null,c)}const b=e(p,[["render",h],["__file","5.2.Alertmanager配置概述及告警规则.html.vue"]]),v=JSON.parse('{"path":"/note/Prometheus/5.2.Alertmanager%E9%85%8D%E7%BD%AE%E6%A6%82%E8%BF%B0%E5%8F%8A%E5%91%8A%E8%AD%A6%E8%A7%84%E5%88%99.html","title":"5.2.Alertmanager配置概述及告警规则","lang":"zh-CN","frontmatter":{"title":"5.2.Alertmanager配置概述及告警规则","order":28,"icon":"lightbulb","description":"一、环境 1、环境准备 promethues安装 略 alertmanager安装 略，之前已经安装好 二、Alertmanager配置概述 Alertmanager主要负责对Prometheus产生的告警进行统一处理，因此在Alertmanager配置中一般会包含以下几个主要部分： 全局配置（global）：用于定义一些全局的公共参数，如全局的SMT...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/note/Prometheus/5.2.Alertmanager%E9%85%8D%E7%BD%AE%E6%A6%82%E8%BF%B0%E5%8F%8A%E5%91%8A%E8%AD%A6%E8%A7%84%E5%88%99.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"5.2.Alertmanager配置概述及告警规则"}],["meta",{"property":"og:description","content":"一、环境 1、环境准备 promethues安装 略 alertmanager安装 略，之前已经安装好 二、Alertmanager配置概述 Alertmanager主要负责对Prometheus产生的告警进行统一处理，因此在Alertmanager配置中一般会包含以下几个主要部分： 全局配置（global）：用于定义一些全局的公共参数，如全局的SMT..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"5.2.Alertmanager配置概述及告警规则\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[{"level":2,"title":"1、环境准备","slug":"_1、环境准备","link":"#_1、环境准备","children":[{"level":3,"title":"promethues安装","slug":"promethues安装","link":"#promethues安装","children":[]},{"level":3,"title":"alertmanager安装","slug":"alertmanager安装","link":"#alertmanager安装","children":[]}]},{"level":2,"title":"1、与Alertmanager关联","slug":"_1、与alertmanager关联","link":"#_1、与alertmanager关联","children":[]},{"level":2,"title":"2、配置告警规则","slug":"_2、配置告警规则","link":"#_2、配置告警规则","children":[{"level":3,"title":"安装node_exporter","slug":"安装node-exporter","link":"#安装node-exporter","children":[]},{"level":3,"title":"Prometheus添加配置","slug":"prometheus添加配置","link":"#prometheus添加配置","children":[]},{"level":3,"title":"创建告警规则文件","slug":"创建告警规则文件","link":"#创建告警规则文件","children":[]},{"level":3,"title":"指定加载告警规则","slug":"指定加载告警规则","link":"#指定加载告警规则","children":[]}]},{"level":2,"title":"3、查看告警状态","slug":"_3、查看告警状态","link":"#_3、查看告警状态","children":[]},{"level":2,"title":"4、测试告警规则","slug":"_4、测试告警规则","link":"#_4、测试告警规则","children":[]},{"level":2,"title":"5、Promql查询","slug":"_5、promql查询","link":"#_5、promql查询","children":[]}],"git":{},"readingTime":{"minutes":6.07,"words":1821},"filePathRelative":"note/Prometheus/5.2.Alertmanager配置概述及告警规则.md","autoDesc":true}');export{b as comp,v as data};
