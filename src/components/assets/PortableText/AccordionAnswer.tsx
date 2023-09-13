import { PortableTextBlock } from "@portabletext/types";

export default function AccordionAnswer({ blocks }: { blocks:PortableTextBlock[]}){
    return(
        <div className="prose">
        {blocks.map((block, index) => {
          if (block._type === 'block' && block.style === 'list-item') {
            // Render list items as <p> with custom bullet
            return (
              <li key={index} className="pl-6 before:content-['•'] before:block mr-2">
                {block.children.map((span, spanIndex) => (
                  <span key={spanIndex}>{span.text}</span>
                ))}
              </li>
            );
          }
  
          // Render other block types as-is
          return (
            <div key={index}>
              {block.children.map((span, spanIndex) => (
                <span key={spanIndex}>{span.text}</span>
              ))}
            </div>
          );
        })}
      </div>
    )
}