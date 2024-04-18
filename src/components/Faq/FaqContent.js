"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const FaqContent = () => {
  return (
    <>
      <div className="faq-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Find Answer Of Your Questions</h2>
          </div>

          <Accordion className="accordion-list" preExpanded={["a"]}>
            <AccordionItem uuid="a">
              <AccordionItemHeading>
                <AccordionItemButton>
                  What is Trade-Ya?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Imagine a social media app mixed with an e-commerce website that doesnt' involve dealing with money for the most part. That's the basic gist of Trade-Ya. <br/><br/>
                  This online web service grants users the ability to get rid of stuff they don't want (but unable to sell) in exchange for stuff they would have interest in (and might not be able to afford). In the process, users can meet new people and interact with each other. <br/><br/>
                  If you've ever bartered trading cards with other kids during your younger years, gave a friend a sweet Christmas present because they gave you an awesome birthday present, or was tipped of with a useful secret from a friend who owed ya; then you know how fun it trading can be!
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="b">
              <AccordionItemHeading>
                <AccordionItemButton>
                  How does it work?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Step 1: 
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="c">
              <AccordionItemHeading>
                <AccordionItemButton>
                  Why was Trade-Ya created?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Egestas facilisis metus vitae mattis velit ac amet, mattis an
                  Quam eu aliquam quisque commodo feugiat placerat elit. Eget
                  mi, morbi tincidunt dolor. Placerat enim rid iculus idemer
                  feugiat faucibus non pulvinar tincidunt. Vulputate tincidunt
                  sed interdum interdum porta enim.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="d">
              <AccordionItemHeading>
                <AccordionItemButton>
                  Is Trade-Ya Safe?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Egestas facilisis metus vitae mattis velit ac amet, mattis an
                  Quam eu aliquam quisque commodo feugiat placerat elit. Eget
                  mi, morbi tincidunt dolor. Placerat enim rid iculus idemer
                  feugiat faucibus non pulvinar tincidunt. Vulputate tincidunt
                  sed interdum interdum porta enim.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="e">
              <AccordionItemHeading>
                <AccordionItemButton>
                  Why should I use Trade-Ya instead of simply selling online?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Because you should
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="f">
              <AccordionItemHeading>
                <AccordionItemButton>How To Add Listings?</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Egestas facilisis metus vitae mattis velit ac amet, mattis an
                  Quam eu aliquam quisque commodo feugiat placerat elit. Eget
                  mi, morbi tincidunt dolor. Placerat enim rid iculus idemer
                  feugiat faucibus non pulvinar tincidunt. Vulputate tincidunt
                  sed interdum interdum porta enim.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default FaqContent;
