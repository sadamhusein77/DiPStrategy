import React from "react";
import Button from "../component/Button";
export default function ArticleWorkflow({onLearnMore}) {
  return (
    <section id="workflow" className="mt-12">
      <div className="container mx-auto">
        <div className="w-full text-6xl">WORK FLOW</div>
        <div className="flex mt-3">
          <div className="w-1/2">
            <div className="text-xs">
              It is particularly important for us that you as a customer are
              actively involved in creative processes and that you know at all
              times which step we are about to take next. Learn more about our
              workflow and our communication with you as a customer here.
            </div>
            <div className="-ml-14">
                <img src="images/workflow.png" alt="workflow" />
            </div>
          </div>
          <div className="w-1/2 pl-16">
            <div className="flex items-center justify-between">
              <div className="font-bold text-xl">
                How we deal with projects from start to finish
              </div>
              <ion-icon
                name="arrow-forward-outline"
                style={{
                  fontSize: "25px",
                  transform: "rotate(-45deg)",
                }}
              ></ion-icon>
            </div>
            <div className="text-xs mt-8">
              The key to successful collaboration and results that are perfectly
              tailored to you is clear goal setting and the elimination of
              misunderstandings.
            </div>
            <div className="text-xs mt-8">
              Before each project, we therefore obtain detailed information from
              you about what you expect from our service, what your goals are
              and what you particularly value. Our experts will also be happy to
              advise you on this step with their extensive specialist knowledge.
            </div>
            <div className="text-xs mt-8">
              As soon as your expectations have been clarified, we get down to
              work. We actively involve you, the customer, in the processes so
              that you always know where your project currently stands.
            </div>
            <div className="mt-8">
                <Button
                color={`bg-yellow-300`}
                name={`LEARN MORE`}
                size={`w-40`}
                height={`h-10`}
                onHandleClick={() => onLearnMore(99)}
                />
            </div>
            <div className="text-lg underline mt-8"><a href="#home">How we communicate with the client</a></div>
            <div className="text-lg underline mt-8"><a href="#home">Stages of the process</a></div>
          </div>
        </div>
      </div>
    </section>
  );
}
