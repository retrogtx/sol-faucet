'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQAccordion() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
      <Accordion type="multiple" className="w-full max-w-lg mx-auto space-y-4">
        {/* Q&A Section 1 */}
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-white text-lg font-medium bg-gray-800 p-4 rounded-lg w-full focus:outline-none">
            Who has made this?
          </AccordionTrigger>
          <AccordionContent className="text-gray-400 bg-gray-700 p-4 rounded-lg">
            amritwt on x dot com
          </AccordionContent>
        </AccordionItem>

        {/* Q&A Section 2 */}
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-white text-lg font-medium bg-gray-800 p-4 rounded-lg w-full focus:outline-none">
            Why was this made?
          </AccordionTrigger>
          <AccordionContent className="text-gray-400 bg-gray-700 p-4 rounded-lg">
            This was made as a beginner effort towards participating in the Superteam × 100xDevs hackathon.
          </AccordionContent>
        </AccordionItem>

        {/* Q&A Section 3 */}
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-white text-lg font-medium bg-gray-800 p-4 rounded-lg w-full focus:outline-none">
            What are some upcoming tools?
          </AccordionTrigger>
          <AccordionContent className="text-gray-400 bg-gray-700 p-4 rounded-lg">
            In the near future, I&apos;m planning to add a playground, a token minting tool as I hone my skills throughout the cohort.
          </AccordionContent>
        </AccordionItem>

        {/* Additional Q&A Section 4 */}
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-white text-lg font-medium bg-gray-800 p-4 rounded-lg w-full focus:outline-none">
            How secure is this?
          </AccordionTrigger>
          <AccordionContent className="text-gray-400 bg-gray-700 p-4 rounded-lg">
            Very. Everything on this site till date is local.
          </AccordionContent>
        </AccordionItem>

        {/* Additional Q&A Section 5 */}
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-white text-lg font-medium bg-gray-800 p-4 rounded-lg w-full focus:outline-none">
            Can I use it for my projects?
          </AccordionTrigger>
          <AccordionContent className="text-gray-400 bg-gray-700 p-4 rounded-lg">
            Yes, you could use the faucet to get tokens airdropped to you!
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
