export default function MessageContent({content}: {content: string}){
    return (
        <>
        {content.split("\n").map((textBlock, index) => (
            <p key={index}>{textBlock || '\u00A0'}</p>
        ))}
        </>
    );
}