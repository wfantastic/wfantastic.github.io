import{_ as a,c as n,o as p,ag as i}from"./chunks/framework.BK5prk7x.js";const g=JSON.parse('{"title":"HTML","description":"","frontmatter":{"title":"HTML","outline":"deep","desc":"HTML学习笔记","tags":"前端","updateTime":"2025-07-22 19:30"},"headers":[],"relativePath":"Notes/Learning/前端/HTML学习笔记.md","filePath":"Notes/Learning/前端/HTML学习笔记.md","lastUpdated":1755237755000}'),e={name:"Notes/Learning/前端/HTML学习笔记.md"};function l(t,s,c,h,o,d){return p(),n("div",null,s[0]||(s[0]=[i(`<h2 id="html考题" tabindex="-1">HTML考题 <a class="header-anchor" href="#html考题" aria-label="Permalink to &quot;HTML考题&quot;">​</a></h2><h5 id="前端页面有哪三层构成-分别是什么-作用是什么-web标准的构成" tabindex="-1">前端页面有哪三层构成，分别是什么？作用是什么？Web标准的构成 <a class="header-anchor" href="#前端页面有哪三层构成-分别是什么-作用是什么-web标准的构成" aria-label="Permalink to &quot;前端页面有哪三层构成，分别是什么？作用是什么？Web标准的构成&quot;">​</a></h5><ol><li>HTML（HyperText Markup Language）：结构层，它是网页的基础，用于定义网页的内容结构，如标题、段落、列表、图像等元素。HTML标签告诉浏览器如何组织和呈现这些内容。</li><li>CSS（Cascading Style Sheets）：样式层，CSS负责为HTML元素添加样式，如颜色、字体、布局、间距等，使得内容具有视觉吸引力并适应不同的设备和屏幕尺寸。通过媒体查询，可以实现响应式设计。</li><li>JavaScript（JS）：行为层，JavaScript是动态交互的核心，它使网页能够响应用户的操作，执行复杂的逻辑，比如表单验证、动画效果、数据绑定等。现代前端开发还可能用到框架和库（如React、Vue或Angular）来简化开发过程。</li></ol><h5 id="title与h1的区别、b与strong的区别、i与em的区别" tabindex="-1">title与h1的区别、b与strong的区别、i与em的区别？ <a class="header-anchor" href="#title与h1的区别、b与strong的区别、i与em的区别" aria-label="Permalink to &quot;title与h1的区别、b与strong的区别、i与em的区别？&quot;">​</a></h5><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>title与h1的区别：</span></span>
<span class="line"><span>定义：</span></span>
<span class="line"><span>    title：概括了网站信息，可以告诉搜索引擎或者用户关于这个网站的内容主题是什么</span></span>
<span class="line"><span>    h1：文章主题内容，告诉蜘蛛我们的网站内容最主要是什么</span></span>
<span class="line"><span>区别：</span></span>
<span class="line"><span>    title他是显示在网页标题上、h1是显示在网页内容上</span></span>
<span class="line"><span>    title比h1更加的重要 (title &gt; h1 ) ==》对于seo的了解</span></span>
<span class="line"><span>场景：</span></span>
<span class="line"><span>    网站的logo都是用h1标签包裹的</span></span></code></pre></div><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>b与strong的区别：</span></span>
<span class="line"><span>定义：</span></span>
<span class="line"><span>    b：标签用于为文本设置粗体样式，但它只是简单地表示文本应该呈现为粗体，并不带有语义强调的意义。</span></span>
<span class="line"><span>    strong：标签用于表示文本的强调语义，默认会呈现为粗体，同时也向屏幕阅读器和搜索引擎表明这段文字的重要性。</span></span>
<span class="line"><span>区别：</span></span>
<span class="line"><span>    b标签只有加粗的样式，没有实际含义。</span></span>
<span class="line"><span>    strong表示标签内字符比较重要，用以强调的。</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>题外话：为了符合css3的规范，b尽量少用，改用strong就行了。</span></span></code></pre></div><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>i与em的区别：</span></span>
<span class="line"><span>定义：</span></span>
<span class="line"><span>    i:标签用于表示文本的斜体样式，但它只是简单地表示文本应该呈现为斜体，并不带有语义强调的意义。</span></span>
<span class="line"><span>    em：标签用于表示文本的强调语义，通常会呈现为斜体，同时也向屏幕阅读器和搜索引擎表明这段文字的强调重要性。</span></span>
<span class="line"><span>区别：</span></span>
<span class="line"><span>    i只是一个倾斜标签，没有实际含义。</span></span>
<span class="line"><span>    em表示标签内字符重要，用以强调的。</span></span>
<span class="line"><span>场景：</span></span>
<span class="line"><span>    i更多的用在字体图标，em术语上（医药，生物）。</span></span></code></pre></div><h5 id="img标签的title和alt有什么区别" tabindex="-1">img标签的title和alt有什么区别？ <a class="header-anchor" href="#img标签的title和alt有什么区别" aria-label="Permalink to &quot;img标签的title和alt有什么区别？&quot;">​</a></h5><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>区别一：表现形式不同</span></span>
<span class="line"><span>    title ： 提示文本，鼠标移入到图片展示文字值</span></span>
<span class="line"><span>    alt   ： 替换文本，图片无法显示时展示文字值</span></span>
<span class="line"><span></span></span>
<span class="line"><span>区别二：SEO层面 ( alt &gt; title )</span></span>
<span class="line"><span>    在seo的层面上，蜘蛛抓取不到图片的内容，所以前端在写img标签的时候为了增加seo效果要加入alt属性来描述这张图是什么内容或者关键词。</span></span></code></pre></div><h5 id="img-标签的-srcset-的作用是什么" tabindex="-1">img 标签的 srcset 的作用是什么 <a class="header-anchor" href="#img-标签的-srcset-的作用是什么" aria-label="Permalink to &quot;img 标签的 srcset 的作用是什么&quot;">​</a></h5><p>用于浏览器根据宽、高和像素密度来加载相应的图片资源。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;small.jpg &quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> srcset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;big.jpg 1440w, middle.jpg 800w, small.jpg 1x&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><p>上面的例子表示浏览器宽度达到 800px 则加载 middle.jpg ，达到 1400px 则加载 big.jpg。注意：像素密度描述只对固定宽度图片有效。、</p>`,13)]))}const m=a(e,[["render",l]]);export{g as __pageData,m as default};
