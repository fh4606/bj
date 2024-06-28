import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,o as s,d as n}from"./app-DuswJAHG.js";const i="/vuepress/assets/2023-10-28_210319_4932170.20721774208216648-DcJogAql.png",t="/vuepress/assets/2023-10-28_210319_7861320.3447863452023495-D5tTGWWJ.png",p="/vuepress/assets/2023-10-28_210319_9417240.5536889827246667-CLUmLSup.png",l="/vuepress/assets/2023-10-28_210320_5403250.23750840081842928-Cwi1FwdF.png",r="/vuepress/assets/2023-10-28_210320_4103800.7019450651417976-YJGL4it0.png",d={},c=n('<h1 id="一、环境介绍" tabindex="-1"><a class="header-anchor" href="#一、环境介绍"><span>一、环境介绍</span></a></h1><table id="a04f6509" class="ne-table" style="table-layout:fixed;border-collapse:collapse;border:1px solid #d9d9d9;width:748px;"><tbody><tr style="height:33px;"><td width="187" style="border:1px solid #d9d9d9;"><p id="ue7a8a199" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">主机名</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="ubac716eb" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">IP地址</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="u5ea54722" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">系统</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="u303e1a0f" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">说明</span></p></td></tr><tr style="height:33px;"><td width="187" style="border:1px solid #d9d9d9;"><p id="udb9c9d9f" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">localhost</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="ue443ce0c" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">192.168.11.61</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="ub9778131" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">Ubuntu 20.04</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="u64a4619a" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">docker方式安装的prometheus</span></p></td></tr></tbody></table><h1 id="二、使用睿象云手机电话和短信报警" tabindex="-1"><a class="header-anchor" href="#二、使用睿象云手机电话和短信报警"><span>二、使用睿象云手机电话和短信报警</span></a></h1><p>注：</p><p>首先申明没有帮睿象云打任何广告。只是要讲电话、短信报警，看到睿象云有这个服务。</p><h2 id="_1、-睿象云-简称ca-安装步骤" tabindex="-1"><a class="header-anchor" href="#_1、-睿象云-简称ca-安装步骤"><span>1、 睿象云（简称CA）安装步骤</span></a></h2><p>打开<a href="https://www.aiops.com/" target="_blank" rel="noopener noreferrer">睿象云官网</a></p><p>点击注册</p><figure><img src="'+i+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>注册成功后并登陆</p><p>点击智能告警平台</p><figure><img src="'+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="创建应用" tabindex="-1"><a class="header-anchor" href="#创建应用"><span>创建应用</span></a></h3><p>在点“集成”，然后找到“prometheus” 点下面的“+” 号</p><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>填写应用名称，在点保持并获取key</p><figure><img src="https://cdn.nlark.com/yuque/0/2023/png/22475872/1688098529871-e6e4d805-ab3a-4fd1-82ba-e0a2b447d014.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_55%2Ctext_5p6X5ZOlTGludXg%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>复制AppKey</p><p>cd0ffd35ec9a4ac88dc944dc470d603b</p><figure><img src="https://cdn.nlark.com/yuque/0/2023/png/22475872/1688098529867-7bafa2d6-80d9-4644-9a7a-a9ae7a81b01d.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_55%2Ctext_5p6X5ZOlTGludXg%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="分派策略" tabindex="-1"><a class="header-anchor" href="#分派策略"><span>分派策略</span></a></h3><p>1、点击“配置”---2、“分派策略”---3、“新建分派”--4、填写“分派策略名称”---5、选择“分派条件”---6、选择“分派人”—7、点击“保存” 如下图：</p><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="配置通知策略" tabindex="-1"><a class="header-anchor" href="#配置通知策略"><span>配置通知策略</span></a></h3><p>发生时：zabbix发生报警调用CA时触发</p><p>认领时：你收到短信后要回复认领时触发</p><p>关闭时：把收到的告警关闭时触发</p><figure><img src="'+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如果配置通知策略有问题 点操作列 修改或者删除</p><figure><img src="https://cdn.nlark.com/yuque/0/2023/png/22475872/1688098529839-8da519ce-9d80-4819-930b-2739a9349d63.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_55%2Ctext_5p6X5ZOlTGludXg%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_2、-cloud-alert-与-prometheus集成" tabindex="-1"><a class="header-anchor" href="#_2、-cloud-alert-与-prometheus集成"><span>2、 Cloud Alert 与 prometheus集成</span></a></h2><h3 id="修改alertmanager的配置文件" tabindex="-1"><a class="header-anchor" href="#修改alertmanager的配置文件"><span>修改alertmanager的配置文件</span></a></h3><p>cd0ffd35ec9a4ac88dc944dc470d603b</p><p>通过webhook方式通知Cloud Alert，编辑告警的配置文件，新增以下内容。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>vim alertmanager/config.yml </span></span>
<span class="line"><span></span></span>
<span class="line"><span>route:</span></span>
<span class="line"><span>  # 全局报警组，这个参数是必选的</span></span>
<span class="line"><span>  receiver: ca</span></span>
<span class="line"><span></span></span>
<span class="line"><span>receivers:</span></span>
<span class="line"><span>- name: &#39;ca&#39;</span></span>
<span class="line"><span>  webhook_configs:</span></span>
<span class="line"><span>  - url: &#39;http://api.aiops.com/alert/api/event/prometheus/自己的appkey&#39;</span></span>
<span class="line"><span>    send_resolved: true</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="检查配置" tabindex="-1"><a class="header-anchor" href="#检查配置"><span>检查配置</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#docker安装方式，检查</span></span>
<span class="line"><span>docker exec -it alertmanager  amtool check-config /etc/alertmanager/config.yml</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#二进制安装方式，检查</span></span>
<span class="line"><span>/opt/alertmanager/alertmanager  amtool check-config /etc/alertmanager/config.yml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重载alertmanager配置" tabindex="-1"><a class="header-anchor" href="#重载alertmanager配置"><span>重载alertmanager配置</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>curl -X POST http://localhost:9093/-/reload</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_6、测试" tabindex="-1"><a class="header-anchor" href="#_6、测试"><span>6、测试</span></a></h2><p>关闭node-exporter</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#docker环境</span></span>
<span class="line"><span>docker stop node-exporter</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#二进制安装环境</span></span>
<span class="line"><span>systemctl stop node_exporter</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看prometheus的alerts: <a href="http://192.168.11.61:9090/alerts" target="_blank" rel="noopener noreferrer">http://192.168.11.61:9090/alerts</a></p><p>查看alertmanager的alerts：<a href="http://192.168.11.61:9093/#/alerts" target="_blank" rel="noopener noreferrer">http://192.168.11.61:9093/#/alerts</a></p><p>如果没收到钉钉消息，排查</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>docker logs -f alertmanager</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>手机正常收到短信和电话报警信息如下图：</p><figure><img src="https://cdn.nlark.com/yuque/0/2023/png/22475872/1688098529877-f5a0b403-b7c7-4e52-94a7-13bdb08a2a5a.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_41%2Ctext_5p6X5ZOlTGludXg%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h1 id="三、我的微信" tabindex="-1"><a class="header-anchor" href="#三、我的微信"><span>三、我的微信</span></a></h1><p>如果碰到问题，可以随时加我微信，谢谢</p><figure><img src="https://cdn.nlark.com/yuque/0/2023/png/22475872/1688098529820-4d0c0cc7-8e0e-444d-9701-7b081535a771.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_31%2Ctext_5p6X5ZOlTGludXg%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,51),o=[c];function h(g,m){return s(),a("div",null,o)}const b=e(d,[["render",h],["__file","5.6.手机电话、短信告警.html.vue"]]),C=JSON.parse('{"path":"/note/Prometheus/5.6.%E6%89%8B%E6%9C%BA%E7%94%B5%E8%AF%9D%E3%80%81%E7%9F%AD%E4%BF%A1%E5%91%8A%E8%AD%A6.html","title":"5.6.手机电话、短信告警","lang":"zh-CN","frontmatter":{"title":"5.6.手机电话、短信告警","order":32,"icon":"lightbulb","description":"一、环境介绍 二、使用睿象云手机电话和短信报警 注： 首先申明没有帮睿象云打任何广告。只是要讲电话、短信报警，看到睿象云有这个服务。 1、 睿象云（简称CA）安装步骤 打开睿象云官网 点击注册 注册成功后并登陆 点击智能告警平台 创建应用 在点“集成”，然后找到“prometheus” 点下面的“+” 号 填写应用名称，在点保持并获取key 复制App...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/vuepress/note/Prometheus/5.6.%E6%89%8B%E6%9C%BA%E7%94%B5%E8%AF%9D%E3%80%81%E7%9F%AD%E4%BF%A1%E5%91%8A%E8%AD%A6.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"5.6.手机电话、短信告警"}],["meta",{"property":"og:description","content":"一、环境介绍 二、使用睿象云手机电话和短信报警 注： 首先申明没有帮睿象云打任何广告。只是要讲电话、短信报警，看到睿象云有这个服务。 1、 睿象云（简称CA）安装步骤 打开睿象云官网 点击注册 注册成功后并登陆 点击智能告警平台 创建应用 在点“集成”，然后找到“prometheus” 点下面的“+” 号 填写应用名称，在点保持并获取key 复制App..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.nlark.com/yuque/0/2023/png/22475872/1688098529871-e6e4d805-ab3a-4fd1-82ba-e0a2b447d014.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_55%2Ctext_5p6X5ZOlTGludXg%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"5.6.手机电话、短信告警\\",\\"image\\":[\\"https://cdn.nlark.com/yuque/0/2023/png/22475872/1688098529871-e6e4d805-ab3a-4fd1-82ba-e0a2b447d014.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_55%2Ctext_5p6X5ZOlTGludXg%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10\\",\\"https://cdn.nlark.com/yuque/0/2023/png/22475872/1688098529867-7bafa2d6-80d9-4644-9a7a-a9ae7a81b01d.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_55%2Ctext_5p6X5ZOlTGludXg%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10\\",\\"https://cdn.nlark.com/yuque/0/2023/png/22475872/1688098529839-8da519ce-9d80-4819-930b-2739a9349d63.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_55%2Ctext_5p6X5ZOlTGludXg%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10\\",\\"https://cdn.nlark.com/yuque/0/2023/png/22475872/1688098529877-f5a0b403-b7c7-4e52-94a7-13bdb08a2a5a.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_41%2Ctext_5p6X5ZOlTGludXg%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10\\",\\"https://cdn.nlark.com/yuque/0/2023/png/22475872/1688098529820-4d0c0cc7-8e0e-444d-9701-7b081535a771.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_31%2Ctext_5p6X5ZOlTGludXg%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[{"level":2,"title":"1、 睿象云（简称CA）安装步骤","slug":"_1、-睿象云-简称ca-安装步骤","link":"#_1、-睿象云-简称ca-安装步骤","children":[{"level":3,"title":"创建应用","slug":"创建应用","link":"#创建应用","children":[]},{"level":3,"title":"分派策略","slug":"分派策略","link":"#分派策略","children":[]},{"level":3,"title":"配置通知策略","slug":"配置通知策略","link":"#配置通知策略","children":[]}]},{"level":2,"title":"2、 Cloud Alert 与 prometheus集成","slug":"_2、-cloud-alert-与-prometheus集成","link":"#_2、-cloud-alert-与-prometheus集成","children":[{"level":3,"title":"修改alertmanager的配置文件","slug":"修改alertmanager的配置文件","link":"#修改alertmanager的配置文件","children":[]},{"level":3,"title":"检查配置","slug":"检查配置","link":"#检查配置","children":[]},{"level":3,"title":"重载alertmanager配置","slug":"重载alertmanager配置","link":"#重载alertmanager配置","children":[]}]},{"level":2,"title":"6、测试","slug":"_6、测试","link":"#_6、测试","children":[]}],"git":{},"readingTime":{"minutes":2.98,"words":895},"filePathRelative":"note/Prometheus/5.6.手机电话、短信告警.md","autoDesc":true}');export{b as comp,C as data};
