import{_ as y}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,c as d,b as i,a as e,F as b,h as f,e as r,f as u,n as M,g as w,i as c,j as t,k as h,d as B,o as m,t as x}from"./app-DZWWIkr0.js";const C={__name:"page.html",setup(g,{expose:o}){o();const a={MyComponent:c({setup(){const n=h("Hello world!"),l=s=>{n.value=s.target.value};return()=>[t("p",[t("span","输入: "),t("input",{value:n.value,onInput:l})]),t("p",[t("span","输出: "),n.value])]}}),defineComponent:c,h:t,ref:h};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}},H=e("p",null,[e("code",null,"more"),u(" 注释之前的内容被视为文章摘要。")],-1),j=B(`<h2 id="页面标题" tabindex="-1"><a class="header-anchor" href="#页面标题"><span>页面标题</span></a></h2><p>The first H1 title in Markdown will be regarded as page title.</p><p>Markdown 中的第一个 H1 标题会被视为页面标题。</p><p>你可以在 Markdown 的 Frontmatter 中设置页面标题。</p><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">页面标题</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">---</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="页面信息" tabindex="-1"><a class="header-anchor" href="#页面信息"><span>页面信息</span></a></h2><p>你可以在 Markdown 的 Frontmatter 中设置页面信息。</p><ul><li>作者设置为 Ms.Hope。</li><li>写作日期为 2020 年 1 月 1 日</li><li>分类为 “使用指南”</li><li>标签为 “页面配置” 和 “使用指南”</li></ul><h2 id="页面内容" tabindex="-1"><a class="header-anchor" href="#页面内容"><span>页面内容</span></a></h2><p>你可以自由在这里书写你的 Markdown。</p><div class="hint-container tip"><p class="hint-container-title">图片引入</p><ul><li>你可以将图片和 Markdown 文件放置在一起使用相对路径进行引用。</li><li>对于 <code>.vuepress/public</code> 文件夹的图片，请使用绝对链接 <code>/</code> 进行引用。</li></ul></div><h2 id="组件" tabindex="-1"><a class="header-anchor" href="#组件"><span>组件</span></a></h2><p>每个 Markdown 页面都会被转换为一个 Vue 组件，这意味着你可以在 Markdown 中使用 Vue 语法：</p><p>2</p>`,14),F=e("p",null,"你也可以创建并引入你自己的组件。",-1),V=e("hr",null,null,-1),N=e("p",null,"主题包含一些有用的组件。这里是一些例子:",-1),P=e("p",null,"一个卡片:",-1);function T(g,o,k,a,n,l){const s=p("Badge"),_=p("VPCard");return m(),d("div",null,[H,i(" more "),j,i(" markdownlint-disable MD033 "),e("ul",null,[(m(),d(b,null,f(3,v=>e("li",null,x(v),1)),64))]),i(" markdownlint-enable MD033 "),F,r(a.MyComponent),V,N,e("ul",null,[e("li",null,[e("p",null,[u("文字结尾应该有深蓝色的 徽章文字 徽章。 "),r(s,{text:"徽章文字",color:"#242378"})])]),e("li",null,[P,r(_,M(w({title:"Mr.Hope",desc:"Where there is light, there is hope",logo:"https://mister-hope.com/logo.svg",link:"https://mister-hope.com",background:"rgba(253, 230, 138, 0.15)"})),null,16)])])])}const E=y(C,[["render",T],["__file","page.html.vue"]]),S=JSON.parse('{"path":"/demo/page.html","title":"页面配置","lang":"zh-CN","frontmatter":{"title":"页面配置","cover":"/assets/images/cover1.jpg","icon":"file","order":3,"author":"Ms.Hope","date":"2020-01-01T00:00:00.000Z","category":["使用指南"],"tag":["页面配置","使用指南"],"sticky":true,"star":true,"footer":"这是测试显示的页脚","copyright":"无版权","description":"more 注释之前的内容被视为文章摘要。 页面标题 The first H1 title in Markdown will be regarded as page title. Markdown 中的第一个 H1 标题会被视为页面标题。 你可以在 Markdown 的 Frontmatter 中设置页面标题。 页面信息 你可以在 Markdown 的 ...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/bj/demo/page.html"}],["meta",{"property":"og:site_name","content":"风华"}],["meta",{"property":"og:title","content":"页面配置"}],["meta",{"property":"og:description","content":"more 注释之前的内容被视为文章摘要。 页面标题 The first H1 title in Markdown will be regarded as page title. Markdown 中的第一个 H1 标题会被视为页面标题。 你可以在 Markdown 的 Frontmatter 中设置页面标题。 页面信息 你可以在 Markdown 的 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://vuepress-theme-hope-docs-demo.netlify.app/bj/assets/images/cover1.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://vuepress-theme-hope-docs-demo.netlify.app/bj/assets/images/cover1.jpg"}],["meta",{"name":"twitter:image:alt","content":"页面配置"}],["meta",{"property":"article:author","content":"Ms.Hope"}],["meta",{"property":"article:tag","content":"页面配置"}],["meta",{"property":"article:tag","content":"使用指南"}],["meta",{"property":"article:published_time","content":"2020-01-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"页面配置\\",\\"image\\":[\\"https://vuepress-theme-hope-docs-demo.netlify.app/bj/assets/images/cover1.jpg\\"],\\"datePublished\\":\\"2020-01-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ms.Hope\\"}]}"]]},"headers":[{"level":2,"title":"页面标题","slug":"页面标题","link":"#页面标题","children":[]},{"level":2,"title":"页面信息","slug":"页面信息","link":"#页面信息","children":[]},{"level":2,"title":"页面内容","slug":"页面内容","link":"#页面内容","children":[]},{"level":2,"title":"组件","slug":"组件","link":"#组件","children":[]}],"git":{},"readingTime":{"minutes":1.76,"words":529},"filePathRelative":"demo/page.md","localizedDate":"2020年1月1日","autoDesc":true}');export{E as comp,S as data};