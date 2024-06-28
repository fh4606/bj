import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,o as s,d as r}from"./app-mt04-1UL.js";const a="/assets/2023-10-28_200249_4495780.6437631187308039-JXWCzFDK.png",p="/assets/2023-10-28_200249_5050820.47095817531156237-BYjzDniO.png",i={},n=r('<h2 id="_1、概述" tabindex="-1"><a class="header-anchor" href="#_1、概述"><span>1、概述</span></a></h2><h3 id="什么是普罗米修斯" tabindex="-1"><a class="header-anchor" href="#什么是普罗米修斯"><span>什么是普罗米修斯？</span></a></h3><p><a href="https://github.com/prometheus" target="_blank" rel="noopener noreferrer">Prometheus</a>是一个开源系统监控和警报工具包，受启发于Google的Brogmon监控系统（相似的Kubernetes是从Google的Brog系统演变而来），从2012年开始由前Google工程师在Soundcloud以开源软件的形式进行研发，并且于2015年早期对外发布早期版本。2016年5月继Kubernetes之后成为第二个正式加入CNCF基金会的项目，同年6月正式发布1.0版本。2017年底发布了基于全新存储层的2.0版本，能更好地与容器平台、云平台配合。</p><figure><img src="'+a+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_2、特点" tabindex="-1"><a class="header-anchor" href="#_2、特点"><span>2、特点</span></a></h2><p>普罗米修斯的主要特点是：</p><ul><li><p>支持多维<a href="https://prometheus.io/docs/concepts/data_model/" target="_blank" rel="noopener noreferrer">数据模型</a>由指标名称和键值对标识的时间序列数据</p></li><li><p>内置时间序列库TSDB（Time Serices Database）</p></li><li><p>支持PromQL（Promethues Query Language），对数据的查询和分析、图形展示和监控告警。</p></li><li><p>不依赖分布式存储；单个服务器节点是自治的</p></li><li><p>支持HTTP 的拉取(pull)方式收集时间序列数据</p></li><li><p>通过中间网关Pushgateway<a href="https://prometheus.io/docs/instrumenting/pushing/" target="_blank" rel="noopener noreferrer">推送时间序列</a></p></li><li><p>通过服务发现或静态配置2种方式发现目标</p></li><li><p>支持多种可视化和仪表盘，如：grafana</p></li></ul><h2 id="_3、核心组件" tabindex="-1"><a class="header-anchor" href="#_3、核心组件"><span>3、核心组件</span></a></h2><ul><li><p><a href="https://github.com/prometheus/prometheus" target="_blank" rel="noopener noreferrer">Prometheus Server</a>， 主要用于抓取数据和存储时序数据，另外还提供查询和 Alert Rule 配置管理。</p></li><li><p><a href="https://prometheus.io/docs/instrumenting/clientlibs/" target="_blank" rel="noopener noreferrer">client libraries</a>，用于检测应用程序代码的客户端库。</p></li><li><p><a href="https://github.com/prometheus/pushgateway" target="_blank" rel="noopener noreferrer">push gateway</a> ，用于批量，短期的监控数据的汇总节点，主要用于业务数据汇报等。</p></li><li><p><a href="https://prometheus.io/docs/instrumenting/exporters/" target="_blank" rel="noopener noreferrer">exporters</a> 收集监控样本数据，并以标准格式向 Prometheus 提供。例如：收集服务器系统数据的 node_exporter, 收集 MySQL 监控样本数据的是 MySQL exporter 等等。</p></li><li><p>用于告警通知管理的 <a href="https://github.com/prometheus/alertmanager" target="_blank" rel="noopener noreferrer">alertmanager</a> 。</p></li></ul><h2 id="_4、基础架构" tabindex="-1"><a class="header-anchor" href="#_4、基础架构"><span>4、基础架构</span></a></h2><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>从这个架构图，也可以看出 Prometheus 的主要模块包含， Server, Exporters, Pushgateway, PromQL, Alertmanager, WebUI 等。</p><p>它大致使用逻辑是这样：</p><ol><li><p>Prometheus server 定期从静态配置的 targets 或者服务发现的 targets 拉取数据（Targets是Prometheus采集Agent需要抓取的采集目标）</p></li><li><p>当新拉取的数据大于配置内存缓存区的时候，Prometheus 会将数据持久化到磁盘（如果使用 remote storage 将持久化到云端）。</p></li><li><p>Prometheus 可以配置 rules，然后定时查询数据，当条件触发的时候，会将 alerts 推送到配置的 Alertmanager。</p></li><li><p>Alertmanager 收到警告的时候，可以根据配置（163，钉钉等），聚合，去重，降噪，最后发送警告。</p></li><li><p>可以使用 API， Prometheus Console 或者 Grafana 查询和聚合数据。</p></li></ol><h2 id="_5、prometheus与zabbix的对比" tabindex="-1"><a class="header-anchor" href="#_5、prometheus与zabbix的对比"><span>5、Prometheus与Zabbix的对比</span></a></h2><table id="e1f4444f" class="ne-table" style="table-layout:fixed;border-collapse:collapse;border:1px solid #d9d9d9;width:750px;"><tbody><tr style="height:33px;"><td width="375" style="border:1px solid #d9d9d9;"><p id="u636b1327" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">Prometheus对比Zabbix：</span></p></td><td width="375" style="border:1px solid #d9d9d9;"></td></tr><tr style="height:33px;"><td width="375" style="border:1px solid #d9d9d9;"><p id="u96f4b850" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">Zabbix</span></p></td><td width="375" style="border:1px solid #d9d9d9;"><p id="u55ab0b8a" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">Prometheus</span></p></td></tr><tr style="height:33px;"><td width="375" style="border:1px solid #d9d9d9;"><p id="u93439b40" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">后端用C开发，界面用PHP开发，定制化难度很高。</span></p></td><td width="375" style="border:1px solid #d9d9d9;"><p id="u99ee3177" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">后端用golang开发，前端是Grafana，JSON编辑即可解决定制化难度较低</span></p></td></tr><tr style="height:33px;"><td width="375" style="border:1px solid #d9d9d9;"><p id="uf4f5925c" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">6.0支持单个Zabbix实例监控超过10万个业务服务</span></p></td><td width="375" style="border:1px solid #d9d9d9;"><p id="u3d591a7e" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">支持更大的集群规模，速度也更快</span></p></td></tr><tr style="height:33px;"><td width="375" style="border:1px solid #d9d9d9;"><p id="ua9bb3072" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">更适合监控物理机环境（物理主机，交换机，网络等监控）</span></p></td><td width="375" style="border:1px solid #d9d9d9;"><p id="ud9775731" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">更适合云环境的监控，对OpenStack，Kubernetes有更好的集成</span></p></td></tr><tr style="height:33px;"><td width="375" style="border:1px solid #d9d9d9;"><p id="uc9ae1500" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">监控数据存储在关系型数据库内，如 MySQL，很难从现有数据中扩展维度</span></p></td><td width="375" style="border:1px solid #d9d9d9;"><p id="ubac5799b" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">监控数据存储在基于时间序列的数据库内，便于对已有数据进行新的聚合。十万级监控数据，Prometheus数据查询速率比Zabbix更快</span></p></td></tr><tr style="height:33px;"><td width="375" style="border:1px solid #d9d9d9;"><p id="ufe0a2ff7" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">安装简单，zabbix-server 一个软件包中包括了所有的服务端功能</span></p></td><td width="375" style="border:1px solid #d9d9d9;"><p id="ue764b4fd" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">安装相对复杂，监控、告警和界面都分属于不同的组件</span></p></td></tr><tr style="height:33px;"><td width="375" style="border:1px solid #d9d9d9;"><p id="u5eed3ef6" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">图形化界面比较成熟，界面上基本上能完成全部的配置操作</span></p></td><td width="375" style="border:1px solid #d9d9d9;"><p id="u9a259e40" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">界面相对较弱，很多配置需要修改配置文件</span></p></td></tr><tr style="height:33px;"><td width="375" style="border:1px solid #d9d9d9;"><p id="u5ff33e5d" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">发展时间更长，对于很多监控场景，都有现成的解决方案</span></p></td><td width="375" style="border:1px solid #d9d9d9;"><p id="ue3aee42e" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">2015 年后开始快速发展，发展时间短，但现在也非常的成熟</span></p></td></tr></tbody></table><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h3><p>监控系统没有绝对的谁好谁不好，最重要的是适合自己的公司团队，能够合理利用最小的成本解决问题。prometheus，zabbix 都只是工具，监控思想才是最重要的。</p><p>实在不知道怎么选？参考如下：</p><p>物理机、硬件设备的监控推荐使用Zabbix</p><p>而docker容器，Kubernetes监控推荐用Prometheus</p><p>云服务器厂商自带有监控系统，有的监控不全面，也可以搭配zabbix和Prometheus来一起使用。</p>',22),l=[n];function d(o,h){return s(),t("div",null,l)}const c=e(i,[["render",d],["__file","1.3.Prometheus监控介绍.html.vue"]]),u=JSON.parse('{"path":"/note/Prometheus/1.3.Prometheus%E7%9B%91%E6%8E%A7%E4%BB%8B%E7%BB%8D.html","title":"1.3.Prometheus监控介绍","lang":"zh-CN","frontmatter":{"title":"1.3.Prometheus监控介绍","order":3,"icon":"lightbulb","description":"1、概述 什么是普罗米修斯？ Prometheus是一个开源系统监控和警报工具包，受启发于Google的Brogmon监控系统（相似的Kubernetes是从Google的Brog系统演变而来），从2012年开始由前Google工程师在Soundcloud以开源软件的形式进行研发，并且于2015年早期对外发布早期版本。2016年5月继Kubernete...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/note/Prometheus/1.3.Prometheus%E7%9B%91%E6%8E%A7%E4%BB%8B%E7%BB%8D.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"1.3.Prometheus监控介绍"}],["meta",{"property":"og:description","content":"1、概述 什么是普罗米修斯？ Prometheus是一个开源系统监控和警报工具包，受启发于Google的Brogmon监控系统（相似的Kubernetes是从Google的Brog系统演变而来），从2012年开始由前Google工程师在Soundcloud以开源软件的形式进行研发，并且于2015年早期对外发布早期版本。2016年5月继Kubernete..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"1.3.Prometheus监控介绍\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[{"level":2,"title":"1、概述","slug":"_1、概述","link":"#_1、概述","children":[{"level":3,"title":"什么是普罗米修斯？","slug":"什么是普罗米修斯","link":"#什么是普罗米修斯","children":[]}]},{"level":2,"title":"2、特点","slug":"_2、特点","link":"#_2、特点","children":[]},{"level":2,"title":"3、核心组件","slug":"_3、核心组件","link":"#_3、核心组件","children":[]},{"level":2,"title":"4、基础架构","slug":"_4、基础架构","link":"#_4、基础架构","children":[]},{"level":2,"title":"5、Prometheus与Zabbix的对比","slug":"_5、prometheus与zabbix的对比","link":"#_5、prometheus与zabbix的对比","children":[{"level":3,"title":"总结","slug":"总结","link":"#总结","children":[]}]}],"git":{},"readingTime":{"minutes":5.78,"words":1735},"filePathRelative":"note/Prometheus/1.3.Prometheus监控介绍.md","autoDesc":true}');export{c as comp,u as data};
