import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,o as n,d as i}from"./app-fmcy30Ms.js";const s="/assets/2023-10-28_210532_1655100.5311794955745638-2xClUHWm.png",t="/assets/2023-10-28_210534_3538320.7368573148558579-B4Xu3kSw.png",r="/assets/2023-10-28_210533_7122520.08871503013489035-sqvLwWB0.png",l="/assets/2023-10-28_210533_2535720.24081362556301344-CtDMcUt1.png",p="/assets/2023-10-28_210532_8504810.8644285014780609-9i0TEF2X.png",o="/assets/2023-10-28_210533_0659940.47410677127001455-BGmyItpJ.png",c="/assets/2023-10-28_210532_6626270.6930002100681165-MyBV4MN_.png",d="/assets/2023-10-28_210532_5791750.24947291687415463-fO8aXWoI.png",g="/assets/2023-10-28_210533_5855620.06621917756486728-Q2rK2vjn.png",h="/assets/2023-10-28_210533_9102680.5663745560467789-DoMuoyM7.png",f="/assets/2023-10-28_210534_7811540.21347546187334443-BXPpInDK.png",m="/assets/2023-10-28_210534_5694480.01082816436328582-C9C2EUfz.png",u="/assets/2023-10-28_210533_4037130.6417549951908704-DndNt5VZ.png",_="/assets/2023-10-28_202232_3157980.3417943973584434-fzbfidHN.png",b={},v=i(`<p>注</p><ul><li>Grafana的告警功能，和prometheus的告警功能不是一回事，别搞混淆了。</li><li>Grafana告警功能实际很少用（了解下就行）</li><li>Grafana可以设置告警规则，类似(prometheus的告警规则)，自带告警功能，类似（alertmanager）</li></ul><h2 id="_1、grafana支持的告警渠道" tabindex="-1"><a class="header-anchor" href="#_1、grafana支持的告警渠道"><span>1、Grafana支持的告警渠道</span></a></h2><p>Grafana Alerting 支持多种告警渠道，比如Alertmanager、钉钉、微信、Discord、Email、Kafka、Pushover、Telegram、Webhook 等等，我们这里使用钉钉和 Email 进行展示说明。</p><h3 id="grafana的email配置" tabindex="-1"><a class="header-anchor" href="#grafana的email配置"><span>grafana的Email配置</span></a></h3><p>邮箱告警通常是最常见的告警接收方式，通过 Grafana 告警需要在 Grafana 的配置文件中配置 stmp 服务。在配置文件 <code>/etc/grafana/grafana.ini</code> 文件中添加 <code>SMTP/Emailing</code> 配置块并开启 <code>Alerting</code>：</p><p><a href="https://grafana.com/docs/grafana/latest/alerting/" target="_blank" rel="noopener noreferrer">https://grafana.com/docs/grafana/latest/alerting/</a></p><ul><li>docker安装修改</li></ul><p><code>config.monitoring</code>配置一定要和我使用docker安装prometheus的方法一致：</p><p>注：通过修改config.monitoring实现</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>cat &gt;&gt;grafana/config.monitoring&lt;&lt;&quot;EOF&quot;</span></span>
<span class="line"><span>GF_SMTP_ENABLED=true</span></span>
<span class="line"><span>GF_SMTP_HOST=smtp.163.com:465</span></span>
<span class="line"><span>GF_SMTP_USER=cdring@163.com</span></span>
<span class="line"><span>GF_SMTP_PASSWORD=MONBUFHOQZPBXHGD</span></span>
<span class="line"><span>GF_SMTP_FROM_ADDRESS=cdring@163.com</span></span>
<span class="line"><span>EOF</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行下面命令重启</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>docker-compose up -d</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>二进制安装，修改grafana.ini</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>vim /opt/prometheus/grafana/conf/defaults.ini</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>增加如下配置：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[smtp] </span></span>
<span class="line"><span>enabled = true</span></span>
<span class="line"><span>host = smtp.163.com:465</span></span>
<span class="line"><span>user = xxx@163.com</span></span>
<span class="line"><span>password = ********</span></span>
<span class="line"><span>skip_verify = true</span></span>
<span class="line"><span>from_address = xxx@163.com</span></span>
<span class="line"><span>from_name = Grafana</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="检查" tabindex="-1"><a class="header-anchor" href="#检查"><span>检查</span></a></h3><p><a href="http://192.168.11.61:3000/admin/settings" target="_blank" rel="noopener noreferrer">http://192.168.11.61:3000/admin/settings</a></p><figure><img src="`+s+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_163邮箱开启pop3-smtp" tabindex="-1"><a class="header-anchor" href="#_163邮箱开启pop3-smtp"><span>163邮箱开启pop3/smtp</span></a></h3><p>需要注意的是这里我们使用的是 163 的邮箱进行发送，在配置 <code>smtp</code> 的时候需要在邮箱中开启 <code>IMAP/SMTP</code> 和 <code>POP3/SMTP</code> 两个服务，并添加一个授权码，上面的 password 密码使用的就是授权码进行认证：</p><figure><img src="'+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_2、grafana配置告警渠道" tabindex="-1"><a class="header-anchor" href="#_2、grafana配置告警渠道"><span>2、Grafana配置告警渠道</span></a></h2><h3 id="修改默认邮件告警渠道" tabindex="-1"><a class="header-anchor" href="#修改默认邮件告警渠道"><span>修改默认邮件告警渠道</span></a></h3><p>回到 Grafana 页面中，点击左侧的Alerting在点击Contact points，在Contact point name修改grafana-default-email，如下图：</p><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>修改接收报警信息的邮箱，测试没问题后，点保存</p><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="添加钉钉告警渠道" tabindex="-1"><a class="header-anchor" href="#添加钉钉告警渠道"><span>添加钉钉告警渠道</span></a></h3><ul><li>需要提前创建webhook地址和开放ip白名单</li></ul><p>回到Contact points页面，点击new contact point，如下图</p><p><a href="https://oapi.dingtalk.com/robot/send?access_token=2ac0682516aa8634f3410c08339d21f7effeec5ac180eec60082a3ca66661f29" target="_blank" rel="noopener noreferrer">https://oapi.dingtalk.com/robot/send?access_token=2ac0682516aa8634f3410c08339d21f7effeec5ac180eec60082a3ca66661f29</a></p><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在Create contact point页面中，填写名称，以及选择对应对应的告警渠道，填写webhook地址，发送测试消息，完成后保存，如下图：</p><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="添加alertmanager告警渠道" tabindex="-1"><a class="header-anchor" href="#添加alertmanager告警渠道"><span>添加alertmanager告警渠道</span></a></h3><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="配置默认接收的告警渠道" tabindex="-1"><a class="header-anchor" href="#配置默认接收的告警渠道"><span>配置默认接收的告警渠道</span></a></h3><p>点击左侧的Alerting在点击 <code>Notification channels</code> ，在default for all alerts默认中点编辑</p><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>编辑页面中，选择我们之前添加好的告警渠道。配置默认的告警渠道</p><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_3、添加告警规则" tabindex="-1"><a class="header-anchor" href="#_3、添加告警规则"><span>3、添加告警规则</span></a></h2><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>告警规则填写：</p><p>下图是以nodedown举例(视频中是以mysqldown，以视频为准)。如果在Prometheus添加了up(mysql_up)告警规则后，就不需要在grafana重复添加。</p><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>完成后，在alert rules的grafana显示新增加的告警规则，如下图：</p><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_4、测试" tabindex="-1"><a class="header-anchor" href="#_4、测试"><span>4、测试</span></a></h2><p>接上面，把node_exporter关闭。视频中是以mysql_exporter举例，忽略这步。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>docker stop node_exporter</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>然后测试grafana配置的邮件和钉钉是否收到告警消息</p><h2 id="_5、总结" tabindex="-1"><a class="header-anchor" href="#_5、总结"><span>5、总结</span></a></h2><p>目前我在生产中使用Grafana的告警功能并不多。可能是因为我自己已经在Prometheus写好了告警规则。所以没必要在重复了</p><h3 id="实际用途" tabindex="-1"><a class="header-anchor" href="#实际用途"><span>实际用途</span></a></h3><p>1、有的同学觉得在Prometheus添加告警规则配置比较麻烦，你也可以在grafana里面来通过网页端添加</p><p>2、对于不想写脚本或开发语言的同学。又想对数据库的某些关键业务表进行监控（前提添加MySQL数据源）。</p><p>，可以使用Grafanfa的告警功能，对数据库的某些重要的表做一个展示并监控报警。</p><h1 id="二、我的微信" tabindex="-1"><a class="header-anchor" href="#二、我的微信"><span>二、我的微信</span></a></h1><p>如果碰到问题，可以随时加我微信，谢谢</p><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',64),k=[v];function x(y,G){return n(),e("div",null,k)}const P=a(b,[["render",x],["__file","6.6.Grafana告警功能（了解）.html.vue"]]),z=JSON.parse('{"path":"/note/Prometheus/6.6.Grafana%E5%91%8A%E8%AD%A6%E5%8A%9F%E8%83%BD%EF%BC%88%E4%BA%86%E8%A7%A3%EF%BC%89.html","title":"6.6.Grafana告警功能（了解）","lang":"zh-CN","frontmatter":{"title":"6.6.Grafana告警功能（了解）","order":41,"icon":"lightbulb","description":"注 Grafana的告警功能，和prometheus的告警功能不是一回事，别搞混淆了。 Grafana告警功能实际很少用（了解下就行） Grafana可以设置告警规则，类似(prometheus的告警规则)，自带告警功能，类似（alertmanager） 1、Grafana支持的告警渠道 Grafana Alerting 支持多种告警渠道，比如Aler...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/note/Prometheus/6.6.Grafana%E5%91%8A%E8%AD%A6%E5%8A%9F%E8%83%BD%EF%BC%88%E4%BA%86%E8%A7%A3%EF%BC%89.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"6.6.Grafana告警功能（了解）"}],["meta",{"property":"og:description","content":"注 Grafana的告警功能，和prometheus的告警功能不是一回事，别搞混淆了。 Grafana告警功能实际很少用（了解下就行） Grafana可以设置告警规则，类似(prometheus的告警规则)，自带告警功能，类似（alertmanager） 1、Grafana支持的告警渠道 Grafana Alerting 支持多种告警渠道，比如Aler..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"6.6.Grafana告警功能（了解）\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[{"level":2,"title":"1、Grafana支持的告警渠道","slug":"_1、grafana支持的告警渠道","link":"#_1、grafana支持的告警渠道","children":[{"level":3,"title":"grafana的Email配置","slug":"grafana的email配置","link":"#grafana的email配置","children":[]},{"level":3,"title":"检查","slug":"检查","link":"#检查","children":[]},{"level":3,"title":"163邮箱开启pop3/smtp","slug":"_163邮箱开启pop3-smtp","link":"#_163邮箱开启pop3-smtp","children":[]}]},{"level":2,"title":"2、Grafana配置告警渠道","slug":"_2、grafana配置告警渠道","link":"#_2、grafana配置告警渠道","children":[{"level":3,"title":"修改默认邮件告警渠道","slug":"修改默认邮件告警渠道","link":"#修改默认邮件告警渠道","children":[]},{"level":3,"title":"添加钉钉告警渠道","slug":"添加钉钉告警渠道","link":"#添加钉钉告警渠道","children":[]},{"level":3,"title":"添加alertmanager告警渠道","slug":"添加alertmanager告警渠道","link":"#添加alertmanager告警渠道","children":[]},{"level":3,"title":"配置默认接收的告警渠道","slug":"配置默认接收的告警渠道","link":"#配置默认接收的告警渠道","children":[]}]},{"level":2,"title":"3、添加告警规则","slug":"_3、添加告警规则","link":"#_3、添加告警规则","children":[]},{"level":2,"title":"4、测试","slug":"_4、测试","link":"#_4、测试","children":[]},{"level":2,"title":"5、总结","slug":"_5、总结","link":"#_5、总结","children":[{"level":3,"title":"实际用途","slug":"实际用途","link":"#实际用途","children":[]}]}],"git":{},"readingTime":{"minutes":3.14,"words":942},"filePathRelative":"note/Prometheus/6.6.Grafana告警功能（了解）.md","autoDesc":true}');export{P as comp,z as data};
