import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,o as n,d as a}from"./app-DuswJAHG.js";const i="/vuepress/assets/2023-10-28_200200_1394940.8928439940208923-t1K9DR59.png",l="/vuepress/assets/2023-10-28_200200_1371550.9791684640413999-DIoS239k.png",t="/vuepress/assets/2023-10-28_200200_0991750.2793932513937478-C-0VrTMT.png",d="/vuepress/assets/2023-10-28_200200_0965740.20247646602682456-AjwYtDSJ.png",p="/vuepress/assets/2023-10-28_200200_1110770.4116193585962221-BDMFRkGN.png",r={},h=a(`<h1 id="一、环境" tabindex="-1"><a class="header-anchor" href="#一、环境"><span>一、环境</span></a></h1><table id="0030825e" class="ne-table" style="table-layout:fixed;border-collapse:collapse;border:1px solid #d9d9d9;width:748px;"><tbody><tr style="height:33px;"><td width="187" style="border:1px solid #d9d9d9;"><p id="ud2f272cf" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">主机名</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="u4e2c14b8" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">IP地址</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="uf4dc73fe" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">系统</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="u76aa44b9" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">说明</span></p></td></tr><tr style="height:33px;"><td width="187" style="border:1px solid #d9d9d9;"></td><td width="187" style="border:1px solid #d9d9d9;"></td><td width="187" style="border:1px solid #d9d9d9;"><p id="uefac69af" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">windows10专业版</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="ud2e42b89" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">安装Xshell7 家庭、教育版</span></p></td></tr><tr style="height:33px;"><td width="187" style="border:1px solid #d9d9d9;"></td><td width="187" style="border:1px solid #d9d9d9;"></td><td width="187" style="border:1px solid #d9d9d9;"><p id="u29ca6f08" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">vmware workstation pro 16.0</span></p></td><td width="187" style="border:1px solid #d9d9d9;"></td></tr><tr style="height:33px;"><td width="187" style="border:1px solid #d9d9d9;"></td><td width="187" style="border:1px solid #d9d9d9;"><p id="u2442880d" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">192.168.11.128</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="uf08fe187" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">Ubuntu20.04</span></p></td><td width="187" style="border:1px solid #d9d9d9;"><p id="u5c4ceaeb" class="ne-p" style="margin:0;padding:0;min-height:24px;"><span class="ne-text">IP修改为192.168.11.100</span></p></td></tr></tbody></table><h1 id="二、安装xshell-7" tabindex="-1"><a class="header-anchor" href="#二、安装xshell-7"><span>二、安装Xshell 7</span></a></h1><h2 id="_1、下载" tabindex="-1"><a class="header-anchor" href="#_1、下载"><span>1、下载</span></a></h2><p><a href="https://www.netsarang.com/en/free-for-home-school/" target="_blank" rel="noopener noreferrer">Xhsell7 官网下载地址</a></p><h2 id="_2、安装" tabindex="-1"><a class="header-anchor" href="#_2、安装"><span>2、安装</span></a></h2><p>双击安装，勾线协议，一直下一步，直到安装完成。</p><h1 id="三、ubuntu系统配置" tabindex="-1"><a class="header-anchor" href="#三、ubuntu系统配置"><span>三、Ubuntu系统配置</span></a></h1><h2 id="_1、修改ip地址" tabindex="-1"><a class="header-anchor" href="#_1、修改ip地址"><span>1、修改ip地址</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>sudo vi /etc/netplan/00-installer-config.yaml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span># This is the network config written by &#39;subiquity&#39;</span></span>
<span class="line"><span>network:</span></span>
<span class="line"><span>  ethernets:</span></span>
<span class="line"><span>    ens33:</span></span>
<span class="line"><span>      dhcp4: true</span></span>
<span class="line"><span>  version: 2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>把上面的内容删除后，按 i粘贴以下内容。设置为静态IP，以及IP地址，dns，网关</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>network:</span></span>
<span class="line"><span>  ethernets:</span></span>
<span class="line"><span>    ens33:</span></span>
<span class="line"><span>      addresses:</span></span>
<span class="line"><span>      - 192.168.11.100/24</span></span>
<span class="line"><span>      gateway4: 192.168.11.2</span></span>
<span class="line"><span>      nameservers:</span></span>
<span class="line"><span>        addresses:</span></span>
<span class="line"><span>        - 192.168.11.2</span></span>
<span class="line"><span>        search: []</span></span>
<span class="line"><span>  version: 2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>应用配置</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>sudo netplan apply</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_2、修改时区" tabindex="-1"><a class="header-anchor" href="#_2、修改时区"><span>2、修改时区</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>sudo cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime</span></span>
<span class="line"><span>date -R</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、系统优化" tabindex="-1"><a class="header-anchor" href="#_3、系统优化"><span>3、系统优化</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#修改文件描述符和进程数</span></span>
<span class="line"><span>sudo sed -i &#39;/^# End of file/,$d&#39; /etc/security/limits.conf</span></span>
<span class="line"><span>sudo sh -c &quot;cat &gt;&gt; /etc/security/limits.conf &lt;&lt;EOF</span></span>
<span class="line"><span># End of file</span></span>
<span class="line"><span>root - nproc 512000</span></span>
<span class="line"><span>* - nproc 512000</span></span>
<span class="line"><span>root - nofile 512000</span></span>
<span class="line"><span>* - nofile 512000</span></span>
<span class="line"><span>EOF&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#软件源替换成阿里云</span></span>
<span class="line"><span>sudo sed -i.bak &#39;s/http:\\/\\/.*.ubuntu.com/http:\\/\\/mirrors.aliyun.com/g&#39; /etc/apt/sources.list</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#更新</span></span>
<span class="line"><span>sudo apt update &amp;&amp; sudo apt upgrade -y</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#重启</span></span>
<span class="line"><span>sudo reboot</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="四、克隆虚拟机" tabindex="-1"><a class="header-anchor" href="#四、克隆虚拟机"><span>四、克隆虚拟机</span></a></h1><p>为后面的安装zabbix集群做准备</p><h2 id="_1、停止虚拟机" tabindex="-1"><a class="header-anchor" href="#_1、停止虚拟机"><span>1、停止虚拟机</span></a></h2><p>注意：要把克隆的虚拟机停止后才能克隆</p><h2 id="_2、克隆虚拟机" tabindex="-1"><a class="header-anchor" href="#_2、克隆虚拟机"><span>2、克隆虚拟机</span></a></h2><p>选择需要克隆的虚拟机，点鼠标右键--管理--克隆</p><figure><img src="`+i+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>点下一步</p><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>默认选择“虚拟机中的当前状态”，点下一步。</p><figure><img src="'+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>选择创建链接克隆，点下一步</p><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>输入虚拟机名称，位置默认存放在文档中，如果存别的地方，点浏览修改。</p><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_3、修改ip地址" tabindex="-1"><a class="header-anchor" href="#_3、修改ip地址"><span>3、修改ip地址</span></a></h2><p>启动后修改ip即可</p><h2 id="_4、克隆多台" tabindex="-1"><a class="header-anchor" href="#_4、克隆多台"><span>4、克隆多台</span></a></h2><p>如果要模拟多台服务器，按上面同样的方法，多克隆几台虚拟机，更改为不同的ip即可。</p>',38),c=[h];function o(u,b){return n(),e("div",null,c)}const v=s(r,[["render",o],["__file","1.2.安装Xshell7和使用Xshell远程连接ubuntu.html.vue"]]),f=JSON.parse('{"path":"/note/Prometheus/1.2.%E5%AE%89%E8%A3%85Xshell7%E5%92%8C%E4%BD%BF%E7%94%A8Xshell%E8%BF%9C%E7%A8%8B%E8%BF%9E%E6%8E%A5ubuntu.html","title":"1.2.安装Xshell7和使用Xshell远程连接ubuntu","lang":"zh-CN","frontmatter":{"title":"1.2.安装Xshell7和使用Xshell远程连接ubuntu","order":2,"icon":"lightbulb","description":"一、环境 二、安装Xshell 7 1、下载 Xhsell7 官网下载地址 2、安装 双击安装，勾线协议，一直下一步，直到安装完成。 三、Ubuntu系统配置 1、修改ip地址 把上面的内容删除后，按 i粘贴以下内容。设置为静态IP，以及IP地址，dns，网关 应用配置 2、修改时区 3、系统优化 四、克隆虚拟机 为后面的安装zabbix集群做准备 1...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/vuepress/note/Prometheus/1.2.%E5%AE%89%E8%A3%85Xshell7%E5%92%8C%E4%BD%BF%E7%94%A8Xshell%E8%BF%9C%E7%A8%8B%E8%BF%9E%E6%8E%A5ubuntu.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"1.2.安装Xshell7和使用Xshell远程连接ubuntu"}],["meta",{"property":"og:description","content":"一、环境 二、安装Xshell 7 1、下载 Xhsell7 官网下载地址 2、安装 双击安装，勾线协议，一直下一步，直到安装完成。 三、Ubuntu系统配置 1、修改ip地址 把上面的内容删除后，按 i粘贴以下内容。设置为静态IP，以及IP地址，dns，网关 应用配置 2、修改时区 3、系统优化 四、克隆虚拟机 为后面的安装zabbix集群做准备 1..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"1.2.安装Xshell7和使用Xshell远程连接ubuntu\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[{"level":2,"title":"1、下载","slug":"_1、下载","link":"#_1、下载","children":[]},{"level":2,"title":"2、安装","slug":"_2、安装","link":"#_2、安装","children":[]},{"level":2,"title":"1、修改ip地址","slug":"_1、修改ip地址","link":"#_1、修改ip地址","children":[]},{"level":2,"title":"2、修改时区","slug":"_2、修改时区","link":"#_2、修改时区","children":[]},{"level":2,"title":"3、系统优化","slug":"_3、系统优化","link":"#_3、系统优化","children":[]},{"level":2,"title":"1、停止虚拟机","slug":"_1、停止虚拟机","link":"#_1、停止虚拟机","children":[]},{"level":2,"title":"2、克隆虚拟机","slug":"_2、克隆虚拟机","link":"#_2、克隆虚拟机","children":[]},{"level":2,"title":"3、修改ip地址","slug":"_3、修改ip地址","link":"#_3、修改ip地址","children":[]},{"level":2,"title":"4、克隆多台","slug":"_4、克隆多台","link":"#_4、克隆多台","children":[]}],"git":{},"readingTime":{"minutes":2.83,"words":850},"filePathRelative":"note/Prometheus/1.2.安装Xshell7和使用Xshell远程连接ubuntu.md","autoDesc":true}');export{v as comp,f as data};
