import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as a,e}from"./app-yH_6ilSD.js";const i={},l=e(`<h2 id="_1、主机操作系统说明" tabindex="-1"><a class="header-anchor" href="#_1、主机操作系统说明"><span>1、主机操作系统说明</span></a></h2><table><thead><tr><th>序号</th><th>操作系统及版本</th><th>备注</th></tr></thead><tbody><tr><td>1</td><td>Rockylinux8.5</td><td></td></tr></tbody></table><h2 id="_2、主机硬件配置说明" tabindex="-1"><a class="header-anchor" href="#_2、主机硬件配置说明"><span>2、主机硬件配置说明</span></a></h2><table><thead><tr><th>需求</th><th>CPU</th><th>内存</th><th>硬盘</th><th>角色</th><th>主机名</th><th>ip地址</th></tr></thead><tbody><tr><td>值</td><td>4C</td><td>8G</td><td>100G</td><td>master</td><td>master01</td><td>192.168.10.21</td></tr><tr><td>值</td><td>4C</td><td>8G</td><td>100G</td><td>worker（node）</td><td>worker01</td><td>192.168.10.22</td></tr><tr><td>值</td><td>4C</td><td>8G</td><td>100G</td><td>worker（node）</td><td>worker02</td><td>192.168.10.23</td></tr></tbody></table><h2 id="_3、主机配置" tabindex="-1"><a class="header-anchor" href="#_3、主机配置"><span>3、主机配置</span></a></h2><h3 id="_3-1、配置yum源-所有主机都配置" tabindex="-1"><a class="header-anchor" href="#_3-1、配置yum源-所有主机都配置"><span>3.1、配置yum源，所有主机都配置</span></a></h3><div class="hint-container important"><p class="hint-container-title">重要</p><p>采用阿里云源，地址：https://developer.aliyun.com/mirror/rockylinux?spm=a2c6h.13651102.0.0.39ad1b11dj9EG6</p></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>sed -e &#39;s|^mirrorlist=|#mirrorlist=|g&#39; \\</span></span>
<span class="line"><span>    -e &#39;s|^#baseurl=http://dl.rockylinux.org/$contentdir|baseurl=https://mirrors.aliyun.com/rockylinux|g&#39; \\</span></span>
<span class="line"><span>    -i.bak \\</span></span>
<span class="line"><span>    /etc/yum.repos.d/Rocky-*.repo</span></span>
<span class="line"><span></span></span>
<span class="line"><span>dnf makecache</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2、修改主机名-配置hosts本地解析" tabindex="-1"><a class="header-anchor" href="#_3-2、修改主机名-配置hosts本地解析"><span>3.2、修改主机名，配置hosts本地解析</span></a></h3><div class="hint-container important"><p class="hint-container-title">重要</p><p>master01为例，其他主机均配置，注意主机名</p></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>hostnamectl set-hostname master01</span></span>
<span class="line"><span>bash</span></span>
<span class="line"><span>cat &gt;&gt; /etc/hosts &lt;&lt;EOF</span></span>
<span class="line"><span>192.168.10.21 master01</span></span>
<span class="line"><span>192.168.10.22 worker01</span></span>
<span class="line"><span>192.168.10.23 worker02</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span>cat /etc/hosts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#以下以master01结果为例</span></span>
<span class="line"><span>[root@localhost ~]# hostnamectl set-hostname master01</span></span>
<span class="line"><span>[root@localhost ~]# bash</span></span>
<span class="line"><span>[root@master01 ~]# cat &gt;&gt; /etc/hosts &lt;&lt;EOF</span></span>
<span class="line"><span>&gt; 192.168.10.21 master01</span></span>
<span class="line"><span>&gt; 192.168.10.22 worker01</span></span>
<span class="line"><span>&gt; 192.168.10.23 worker02</span></span>
<span class="line"><span>&gt; EOF</span></span>
<span class="line"><span>[root@master01 ~]# cat /etc/hosts</span></span>
<span class="line"><span>127.0.0.1   localhost localhost.localdomain localhost4 localhost4.localdomain4</span></span>
<span class="line"><span>::1         localhost localhost.localdomain localhost6 localhost6.localdomain6</span></span>
<span class="line"><span>192.168.10.21 master01</span></span>
<span class="line"><span>192.168.10.22 worker01</span></span>
<span class="line"><span>192.168.10.23 worker02</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container important"><p class="hint-container-title">重要</p><p>完成以后在master01上测试连通性</p></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>[root@master01 ~]# ping worker01</span></span>
<span class="line"><span>[root@master01 ~]# ping worker02</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#以下以master01结果为例</span></span>
<span class="line"><span>[root@master01 ~]# ping worker01 </span></span>
<span class="line"><span>PING worker01 (192.168.10.22) 56(84) bytes of data.</span></span>
<span class="line"><span>64 bytes from worker01 (192.168.10.22): icmp_seq=1 ttl=64 time=0.652 ms</span></span>
<span class="line"><span>64 bytes from worker01 (192.168.10.22): icmp_seq=2 ttl=64 time=0.430 ms</span></span>
<span class="line"><span>^C</span></span>
<span class="line"><span>--- worker01 ping statistics ---</span></span>
<span class="line"><span>2 packets transmitted, 2 received, 0% packet loss, time 1065ms</span></span>
<span class="line"><span>rtt min/avg/max/mdev = 0.430/0.541/0.652/0.111 ms</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[root@master01 ~]# ping worker02</span></span>
<span class="line"><span>PING worker02 (192.168.10.23) 56(84) bytes of data.</span></span>
<span class="line"><span>64 bytes from worker02 (192.168.10.23): icmp_seq=1 ttl=64 time=0.774 ms</span></span>
<span class="line"><span>64 bytes from worker02 (192.168.10.23): icmp_seq=2 ttl=64 time=0.444 ms</span></span>
<span class="line"><span>^C</span></span>
<span class="line"><span>--- worker02 ping statistics ---</span></span>
<span class="line"><span>2 packets transmitted, 2 received, 0% packet loss, time 1019ms</span></span>
<span class="line"><span>rtt min/avg/max/mdev = 0.444/0.609/0.774/0.165 ms</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3、所有主机关闭防火墙、selinux、swap等设置" tabindex="-1"><a class="header-anchor" href="#_3-3、所有主机关闭防火墙、selinux、swap等设置"><span>3.3、所有主机关闭防火墙、selinux、swap等设置</span></a></h3><div class="hint-container important"><p class="hint-container-title">重要</p><p>master01为例，其他主机均配置，配置完成后 <em><strong>重启主机</strong></em></p></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>systemctl disable firewalld.service</span></span>
<span class="line"><span>systemctl stop firewalld.service</span></span>
<span class="line"><span>firewall-cmd --state</span></span>
<span class="line"><span>sed -ri &#39;s/SELINUX=enforcing/SELINUX=disabled/g&#39; /etc/selinux/config</span></span>
<span class="line"><span>swapoff -a &amp;&amp; sysctl -w vm.swappiness=0</span></span>
<span class="line"><span>sed -i &#39;s/\\/dev\\/mapper\\/rl-swap/#\\/dev\\/mapper\\/rl-swap/g&#39; /etc/fstab</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4、所有主机配置时间同步-同步阿里云时间" tabindex="-1"><a class="header-anchor" href="#_3-4、所有主机配置时间同步-同步阿里云时间"><span>3.4、所有主机配置时间同步，同步阿里云时间</span></a></h3><div class="hint-container important"><p class="hint-container-title">重要</p><p>master01为例，安装ntpdate，8以后得系统弃用了ntpdate，可安装wlnmp来实现ntpdate，其他主机均配置。</p></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>rpm -ivh http://mirrors.wlnmp.com/centos/wlnmp-release-centos.noarch.rpm</span></span>
<span class="line"><span>yum install wntp -y</span></span>
<span class="line"><span>ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime</span></span>
<span class="line"><span>echo &#39;Asia/Shanghai&#39; &gt; /etc/timezone</span></span>
<span class="line"><span>ntpdate time2.aliyun.com</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container important"><p class="hint-container-title">重要</p><p>master01为例，配置定时同步，5分钟同步一次时间，其他主机均配置</p></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>crontab -e</span></span>
<span class="line"><span>*/5 * * * * ntpdate time2.aliyun.com</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5、升级内核" tabindex="-1"><a class="header-anchor" href="#_3-5、升级内核"><span>3.5、升级内核</span></a></h3><div class="hint-container important"><p class="hint-container-title">重要</p><p>升级内核一般是为了支持新特性、新设备、新功能。为了测试最新的软硬件产品特性，升级内核比较常见。使用 ELRepo 升级内核变得非常简单。以下以master01为例，其他主机均升级，当前最新内核为：kernel-ml-6.6.11-1.el8.elrepo.x86_64。升级内核参考文章：https://blog.51cto.com/sysin/9097931</p></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#查询主机内核版本</span></span>
<span class="line"><span>[root@master01 ~]# uname -r</span></span>
<span class="line"><span>4.18.0-348.el8.0.2.x86_64</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#启用 ELRepo</span></span>
<span class="line"><span>yum -y install elrepo-release</span></span>
<span class="line"><span>#查询 ELRepo 中的 kernel 版本</span></span>
<span class="line"><span>yum --disablerepo=&quot;*&quot; --enablerepo=&quot;elrepo-kernel&quot; list available</span></span>
<span class="line"><span># 安装新内核</span></span>
<span class="line"><span>yum --disablerepo=\\* --enablerepo=elrepo-kernel install -y kernel-ml.x86_64</span></span>
<span class="line"><span>#kernel-core、kernel-modules 与 kernel 依赖自动更新</span></span>
<span class="line"><span># 安装新内核相关软件</span></span>
<span class="line"><span>yum --disablerepo=\\* --enablerepo=elrepo-kernel install -y kernel-ml-devel kernel-ml-tools kernel-ml-tools-libs kernel-ml-tools-libs-devel kernel-ml-headers --skip-broken</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#安装完成后重启后默认以新内核重启，可再次查询内核版本</span></span>
<span class="line"><span>[root@master01 ~]# reboot</span></span>
<span class="line"><span>[root@master01 ~]# uname -r</span></span>
<span class="line"><span>6.6.11-1.el8.elrepo.x86_64</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-6、配置内核转发及网桥过滤" tabindex="-1"><a class="header-anchor" href="#_3-6、配置内核转发及网桥过滤"><span>3.6、配置内核转发及网桥过滤</span></a></h3><div class="hint-container important"><p class="hint-container-title">重要</p><p>master01为例，配置内核转发及网桥过滤，其他主机均配置</p></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#添加网桥过滤及内核转发配置文件</span></span>
<span class="line"><span>cat &gt; /etc/sysctl.d/k8s.conf &lt;&lt;EOF</span></span>
<span class="line"><span>net.bridge.bridge-nf-call-ip6tables = 1</span></span>
<span class="line"><span>net.bridge.bridge-nf-call-iptables = 1</span></span>
<span class="line"><span>net.ipv4.ip_forward = 1</span></span>
<span class="line"><span>vm.swappiness=0</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#加载modprobe br_netfilter模块</span></span>
<span class="line"><span>modprobe br_netfilter</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#查看是否加载</span></span>
<span class="line"><span>[root@worker01 ~]# modprobe br_netfilter</span></span>
<span class="line"><span>[root@worker01 ~]# lsmod | grep br_netfilter</span></span>
<span class="line"><span>br_netfilter           32768  0</span></span>
<span class="line"><span>bridge                393216  1 br_netfilter   #已加载</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#加载网桥过滤及内核转发配置文件</span></span>
<span class="line"><span>[root@worker01 ~]# sysctl -p /etc/sysctl.d/k8s.conf </span></span>
<span class="line"><span>net.bridge.bridge-nf-call-ip6tables = 1</span></span>
<span class="line"><span>net.bridge.bridge-nf-call-iptables = 1</span></span>
<span class="line"><span>net.ipv4.ip_forward = 1</span></span>
<span class="line"><span>vm.swappiness = 0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-7、安装ipset及ipvsadm" tabindex="-1"><a class="header-anchor" href="#_3-7、安装ipset及ipvsadm"><span>3.7、安装ipset及ipvsadm</span></a></h3><div class="hint-container important"><p class="hint-container-title">重要</p><p>master01为例，安装ipset及ipvsadm，主要用于实现service转发，其他主机均配置</p></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#安装ipset及ipvsadm</span></span>
<span class="line"><span>yum install -y ipset ipvsadm</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#配置ipvsadm模块加载方式，添加需要加载的模块</span></span>
<span class="line"><span>cat &gt; /etc/sysconfig/modules/ipvs.modules &lt;&lt;EOF</span></span>
<span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>modprobe -- ip_vs</span></span>
<span class="line"><span>modprobe -- ip_vs_rr</span></span>
<span class="line"><span>modprobe -- ip_vs_wrr</span></span>
<span class="line"><span>modprobe -- ip_vs_sh</span></span>
<span class="line"><span>modprobe -- nf_conntrack</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#授权、运行、检查是否加载</span></span>
<span class="line"><span>[root@master01 ~]# chmod 755 /etc/sysconfig/modules/ipvs.modules</span></span>
<span class="line"><span>[root@master01 ~]# bash /etc/sysconfig/modules/ipvs.modules</span></span>
<span class="line"><span>[root@master01 ~]# lsmod |grep -e ip_vs -e nf_conntrack</span></span>
<span class="line"><span>ip_vs_sh               12288  0</span></span>
<span class="line"><span>ip_vs_wrr              12288  0</span></span>
<span class="line"><span>ip_vs_rr               12288  0</span></span>
<span class="line"><span>ip_vs                 221184  6 ip_vs_rr,ip_vs_sh,ip_vs_wrr</span></span>
<span class="line"><span>nf_conntrack          204800  4 xt_conntrack,nf_nat,xt_MASQUERADE,ip_vs</span></span>
<span class="line"><span>nf_defrag_ipv6         24576  2 nf_conntrack,ip_vs</span></span>
<span class="line"><span>nf_defrag_ipv4         12288  1 nf_conntrack</span></span>
<span class="line"><span>libcrc32c              12288  5 nf_conntrack,nf_nat,nf_tables,xfs,ip_vs</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重启所有主机" tabindex="-1"><a class="header-anchor" href="#重启所有主机"><span>------------------------------------------------重启所有主机------------------------------------------------</span></a></h3><h3 id="_3-8、安装docker" tabindex="-1"><a class="header-anchor" href="#_3-8、安装docker"><span>3.8、安装docker</span></a></h3><div class="hint-container important"><p class="hint-container-title">重要</p><p>master01为例，安装docker，其他主机均配置，注意安装前卸载掉rocky8.x自带的podman，命令：yum erase podman buildah</p></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>#卸载掉rocky8.x自带的podman</span></span>
<span class="line"><span>yum erase podman buildah -y</span></span>
<span class="line"><span>#安装containerd</span></span>
<span class="line"><span>yum install -y https://download.docker.com/linux/centos/8/x86_64/stable/Packages/containerd.io-1.4.3-3.1.el8.x86_64.rpm</span></span>
<span class="line"><span>yum install -y yum-utils device-mapper-persistent-data lvm2</span></span>
<span class="line"><span>#安装docker</span></span>
<span class="line"><span>yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo</span></span>
<span class="line"><span>yum install -y docker-ce-20.10.9-3.el8 docker-ce-cli-20.10.9-3.el8 containerd.io</span></span>
<span class="line"><span>systemctl start docker.service</span></span>
<span class="line"><span>systemctl enable docker.service</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-9、配置阿里云镜像加速服务及修改cgroup方式" tabindex="-1"><a class="header-anchor" href="#_3-9、配置阿里云镜像加速服务及修改cgroup方式"><span>3.9、配置阿里云镜像加速服务及修改cgroup方式</span></a></h3><div class="hint-container important"><p class="hint-container-title">重要</p><p>master01为例，其他主机均修改</p></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>sudo mkdir -p /etc/docker</span></span>
<span class="line"><span>sudo tee /etc/docker/daemon.json &lt;&lt;-&#39;EOF&#39;</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;registry-mirrors&quot;: [&quot;https://a05jv9b5.mirror.aliyuncs.com&quot;],</span></span>
<span class="line"><span>  &quot;exec-opts&quot;: [&quot;native.cgroupdriver=systemd&quot;]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span>sudo systemctl daemon-reload</span></span>
<span class="line"><span>sudo systemctl restart docker</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,37),p=[l];function t(r,d){return a(),n("div",null,p)}const v=s(i,[["render",t],["__file","01.html.vue"]]),m=JSON.parse('{"path":"/note/kubernetes/install/kubeadm/1%20master%20and%202%20slaves/01.html","title":"01-环境准备","lang":"zh-CN","frontmatter":{"title":"01-环境准备","order":1,"icon":"lightbulb","description":"1、主机操作系统说明 2、主机硬件配置说明 3、主机配置 3.1、配置yum源，所有主机都配置 重要 采用阿里云源，地址：https://developer.aliyun.com/mirror/rockylinux?spm=a2c6h.13651102.0.0.39ad1b11dj9EG6 3.2、修改主机名，配置hosts本地解析 重要 master...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/bj/note/kubernetes/install/kubeadm/1%20master%20and%202%20slaves/01.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"01-环境准备"}],["meta",{"property":"og:description","content":"1、主机操作系统说明 2、主机硬件配置说明 3、主机配置 3.1、配置yum源，所有主机都配置 重要 采用阿里云源，地址：https://developer.aliyun.com/mirror/rockylinux?spm=a2c6h.13651102.0.0.39ad1b11dj9EG6 3.2、修改主机名，配置hosts本地解析 重要 master..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"风华"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"01-环境准备\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"风华\\",\\"url\\":\\"/portfolio\\"}]}"]]},"headers":[{"level":2,"title":"1、主机操作系统说明","slug":"_1、主机操作系统说明","link":"#_1、主机操作系统说明","children":[]},{"level":2,"title":"2、主机硬件配置说明","slug":"_2、主机硬件配置说明","link":"#_2、主机硬件配置说明","children":[]},{"level":2,"title":"3、主机配置","slug":"_3、主机配置","link":"#_3、主机配置","children":[{"level":3,"title":"3.1、配置yum源，所有主机都配置","slug":"_3-1、配置yum源-所有主机都配置","link":"#_3-1、配置yum源-所有主机都配置","children":[]},{"level":3,"title":"3.2、修改主机名，配置hosts本地解析","slug":"_3-2、修改主机名-配置hosts本地解析","link":"#_3-2、修改主机名-配置hosts本地解析","children":[]},{"level":3,"title":"3.3、所有主机关闭防火墙、selinux、swap等设置","slug":"_3-3、所有主机关闭防火墙、selinux、swap等设置","link":"#_3-3、所有主机关闭防火墙、selinux、swap等设置","children":[]},{"level":3,"title":"3.4、所有主机配置时间同步，同步阿里云时间","slug":"_3-4、所有主机配置时间同步-同步阿里云时间","link":"#_3-4、所有主机配置时间同步-同步阿里云时间","children":[]},{"level":3,"title":"3.5、升级内核","slug":"_3-5、升级内核","link":"#_3-5、升级内核","children":[]},{"level":3,"title":"3.6、配置内核转发及网桥过滤","slug":"_3-6、配置内核转发及网桥过滤","link":"#_3-6、配置内核转发及网桥过滤","children":[]},{"level":3,"title":"3.7、安装ipset及ipvsadm","slug":"_3-7、安装ipset及ipvsadm","link":"#_3-7、安装ipset及ipvsadm","children":[]},{"level":3,"title":"------------------------------------------------重启所有主机------------------------------------------------","slug":"重启所有主机","link":"#重启所有主机","children":[]},{"level":3,"title":"3.8、安装docker","slug":"_3-8、安装docker","link":"#_3-8、安装docker","children":[]},{"level":3,"title":"3.9、配置阿里云镜像加速服务及修改cgroup方式","slug":"_3-9、配置阿里云镜像加速服务及修改cgroup方式","link":"#_3-9、配置阿里云镜像加速服务及修改cgroup方式","children":[]}]}],"git":{},"readingTime":{"minutes":3.92,"words":1176},"filePathRelative":"note/kubernetes/install/kubeadm/1 master and 2 slaves/01.md","autoDesc":true}');export{v as comp,m as data};
