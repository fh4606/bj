import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,o as r,d as a}from"./app-mt04-1UL.js";const o="/assets/2023-10-28_210210_0756250.8102617397072022-BK8wXGmf.png",n="/assets/2023-10-28_210209_9560950.745993329350606-D4cRwGEy.png",l={},s=a('<p>告警能力在Prometheus的架构中被划分成两个独立的部分。如下所示，通过在Prometheus中定义AlertRule（告警规则），Prometheus会周期性的对告警规则进行计算，如果满足告警触发条件就会向Alertmanager发送告警信息。</p><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Alertmanager作为一个独立的组件，负责接收并处理来自Prometheus Server(也可以是其它的客户端程序)的告警信息。Alertmanager可以对这些告警信息进行进一步的处理，比如当接收到大量重复告警时能够消除重复的告警信息，同时对告警信息进行分组并且路由到正确的通知方，Prometheus内置了对邮件，Slack等多种通知方式的支持，同时还支持与Webhook的集成，以支持更多定制化的场景。例如，目前还不支持钉钉，那用户完全可以通过Webhook与钉钉机器人进行集成，从而通过钉钉接收告警信息。同时AlertManager还提供了静默和告警抑制机制来对告警通知行为进行优化。</p><h2 id="alertmanager特性" tabindex="-1"><a class="header-anchor" href="#alertmanager特性"><span>Alertmanager特性</span></a></h2><p>Alertmanager除了提供基本的告警通知能力以外，还主要提供了如：分组、抑制以及静默等告警特性：</p><figure><img src="'+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Alertmanager特性</p><h3 id="分组" tabindex="-1"><a class="header-anchor" href="#分组"><span>分组</span></a></h3><p>分组机制可以将详细的告警信息合并成一个通知。在某些情况下，比如由于系统宕机导致大量的告警被同时触发，在这种情况下分组机制可以将这些被触发的告警合并为一个告警通知，避免一次性接受大量的告警通知，而无法对问题进行快速定位。</p><p>例如，当集群中有数百个正在运行的服务实例，并且为每一个实例设置了告警规则。假如此时发生了网络故障，可能导致大量的服务实例无法连接到数据库，结果就会有数百个告警被发送到Alertmanager。</p><p>而作为用户，可能只希望能够在一个通知中就能查看哪些服务实例收到影响。这时可以按照服务所在集群或者告警名称对告警进行分组，而将这些告警内聚在一起成为一个通知。</p><p>告警分组，告警时间，以及告警的接受方式可以通过Alertmanager的配置文件进行配置。</p><h3 id="抑制" tabindex="-1"><a class="header-anchor" href="#抑制"><span>抑制</span></a></h3><p>抑制是指当某一告警发出后，可以停止重复发送由此告警引发的其它告警的机制。</p><p>例如，当集群不可访问时触发了一次告警，通过配置Alertmanager可以忽略与该集群有关的其它所有告警。这样可以避免接收到大量与实际问题无关的告警通知。</p><p>抑制机制同样通过Alertmanager的配置文件进行设置。</p><h3 id="静默" tabindex="-1"><a class="header-anchor" href="#静默"><span>静默</span></a></h3><p>静默提供了一个简单的机制可以快速根据标签对告警进行静默处理。如果接收到的告警符合静默的配置，Alertmanager则不会发送告警通知。</p><p>静默设置需要在Alertmanager的Werb页面上进行设置。</p>',19),p=[s];function m(i,h){return r(),t("div",null,p)}const u=e(l,[["render",m],["__file","5.1.Prometheus告警简介.html.vue"]]),d=JSON.parse('{"path":"/note/Prometheus/5.1.Prometheus%E5%91%8A%E8%AD%A6%E7%AE%80%E4%BB%8B.html","title":"5.1.Prometheus告警简介","lang":"zh-CN","frontmatter":{"title":"5.1.Prometheus告警简介","order":27,"icon":"lightbulb","description":"告警能力在Prometheus的架构中被划分成两个独立的部分。如下所示，通过在Prometheus中定义AlertRule（告警规则），Prometheus会周期性的对告警规则进行计算，如果满足告警触发条件就会向Alertmanager发送告警信息。 Alertmanager作为一个独立的组件，负责接收并处理来自Prometheus Server(也可...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/note/Prometheus/5.1.Prometheus%E5%91%8A%E8%AD%A6%E7%AE%80%E4%BB%8B.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"5.1.Prometheus告警简介"}],["meta",{"property":"og:description","content":"告警能力在Prometheus的架构中被划分成两个独立的部分。如下所示，通过在Prometheus中定义AlertRule（告警规则），Prometheus会周期性的对告警规则进行计算，如果满足告警触发条件就会向Alertmanager发送告警信息。 Alertmanager作为一个独立的组件，负责接收并处理来自Prometheus Server(也可..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"5.1.Prometheus告警简介\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[{"level":2,"title":"Alertmanager特性","slug":"alertmanager特性","link":"#alertmanager特性","children":[{"level":3,"title":"分组","slug":"分组","link":"#分组","children":[]},{"level":3,"title":"抑制","slug":"抑制","link":"#抑制","children":[]},{"level":3,"title":"静默","slug":"静默","link":"#静默","children":[]}]}],"git":{},"readingTime":{"minutes":2.73,"words":819},"filePathRelative":"note/Prometheus/5.1.Prometheus告警简介.md","autoDesc":true}');export{u as comp,d as data};
