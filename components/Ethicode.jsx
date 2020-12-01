import content from '../public/content.json';

const Ethicode = () => {
  const displayItems = content.Ethicode.content;

  let visionContent = '';

  displayItems.forEach((item) => {
    visionContent =
      visionContent +
      `<${item.html_tag} class="visionContent">` +
      item.display.map((item) => {
        if (item[1].length) {
          return `<span class="${item[1]}">${item[0]}</span>`;
        } else {
          return `<span>${item[0]}</span>`;
        }
      }) +
      `</${item.html_tag}>`;
  });
  visionContent = visionContent.replace(/n>,<span/g, 'n><span');
  
  return (
    <div
      className="vision"
      dangerouslySetInnerHTML={{ __html: visionContent }}
    ></div>
  );
};

export default Ethicode;
