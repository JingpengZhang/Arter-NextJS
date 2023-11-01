import React from "react";
import Image from "next/image";
import DefaultCover from "@/assets/images/articleCover.jpg";
import Link from "next/link";

const Page: React.FC = () => {
  const categories = [
    {
      id: 1,
      name: "Design",
    },
    {
      id: 2,
      name: "Events",
    },
    {
      id: 3,
      name: "Technology",
    },
  ];

  const tags = [
    {
      id: 1,
      name: "design",
    },
    {
      id: 2,
      name: "events",
    },
    {
      id: 3,
      name: "process",
    },
  ];

  return (
    <div className="">
      {/**  顶部 */}
      <div className="flex items-center justify-between">
        <p className="text-2xl font-bold text-black">遵循您自己的设计流程</p>
        <div
          style={{ boxShadow: "inset 0 3px 8px 0 rgba(15,15,20,.2)" }}
          className="flex items-center bg-white h-6 rounded-full px-4 text-xs text-gray-400"
        >
          <span>2023年11月1日</span>
        </div>
      </div>

      {/** 封面图 */}
      <div className="mt-7 h-96 overflow-hidden">
        <Image
          className="w-full h-full object-cover"
          src={DefaultCover}
          alt="封面图"
        />
      </div>

      {/** 文章内容 */}
      <section className="bg-white w-full p-8 mt-8 shadow ">
        <section className="poccur arter">
          <p>
            我的工作既简单又复杂，所以可以用简单而华丽的语言来描述。我喜欢它的优越感和精致感。我喜欢头脑敏锐、同时又容易交谈的人。这些品质可以完美自然地结合在一起。然而，如果这些属性被人为地与人联系起来，像人这样的东西看起来就会很痛苦。
          </p>
          <p>
            现代设计缺乏热爱外行。寻找这样的设计师，无论他们环顾四周多少，他们都带有一点美感；你总是想做别的事情。设计师不仅是形象的创造者，也是讲述故事和思考的梦想家。对我来说，一个好故事的所有要素都比它的形式更重要。
          </p>
          <p>
            设计师必须是一个解释者，真实和虚拟的需求必须预见到人们那些他们没有想到的问题，并在已经创建的对象中突然打开。
          </p>
          <blockquote>
            <p>
              对我来说，设计就是生活质量。好的设计与流行趋势关系不大。厌倦了听他如何试图赋予一种轻浮的时尚现象以地位。在我看来，设计师应该努力做的不仅仅是单独的事情。
            </p>
            <cite>安东尼奥·奇特里奥</cite>
          </blockquote>
          <p>
            极简主义已经达到了某个临界点，即顶峰。去哪儿？我不知道。对于设计师来说最重要的是创造出让他满意的东西，工作带来满足感，与客户的合作带来满足感。我们需要了解客户想要什么，并将其与您的愿望和可能性联系起来。要创造出杰出的东西，我们需要两者的热情。我是一个非常快乐的人，因为我和优秀的客户一起工作，他们给了我很大的帮助。
          </p>
          <ul>
            <li>设计——不是物体的外观，而是它的工作原理。</li>
            <li>好的设计——是创新的。</li>
            <li>一个好的设计——就是尽可能少的设计。</li>
            <li>好的设计——美观。</li>
          </ul>

          <p>
            想想你想在一个创造的物体上投入什么内容，然后才会形成。关键是你的精神。与硬拷贝不同的精神。
          </p>

          <h2>简单的画廊</h2>

          <p>
            我想创造美丽的事物，即使这对任何人来说都没有必要，作为与丑陋事物的斗争。这是我的意图。
          </p>

          <img src="https://arter.bslthemes.com/light/wp-content/uploads/sites/2/2020/09/work-10-768x512.jpg" />

          <img src="https://arter.bslthemes.com/light/wp-content/uploads/sites/2/2020/09/work-11-768x512.jpg" />

          <p>
            快、便宜、好——从这三件事中你应该选择其中两个。如果它又快又便宜，那就永远不会好。如果它又便宜又好，它永远不会很快见效。如果它又好又快，它就永远不会便宜。但请记住：在这三个中，您仍然必须始终选择两个。
          </p>
        </section>

        {/** 分类、作者信息 */}
        <div className="flex items-center text-sm">
          <span>Posted in</span>
          <ul className="flex items-center">
            {categories.map((item, index) => {
              return (
                <li key={item.id}>
                  <Link className="text-primary ml-1" href={""}>
                    {item.name}
                  </Link>
                  {index !== categories.length - 1 && <span>,</span>}
                </li>
              );
            })}
          </ul>
          <span className="ml-2">by &nbsp;</span>
          <span className="text-stone-600">JP Zhange</span>
        </div>

        <div className="flex items-center text-sm mt-5">
          <span className="">Tags:</span>
          <ul className="flex items-center ml-2">
            {tags.map((item) => {
              return (
                <li key={item.id}>
                  <Link
                    className="border border-primary text-primary py-0.5 px-1.5 mr-2 font-bold"
                    href={""}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
};
export default Page;
