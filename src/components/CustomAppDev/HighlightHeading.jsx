  const highlightWords = (text, count, position = "start") => {
    if (!text) return null;

    const words = text.split(" ");
    let highlightPart = "";
    let normalPart = "";

    if (position === "start") {
      highlightPart = words.slice(0, count).join(" ");
      normalPart = words.slice(count).join(" ");
    } else if (position === "end") {
      normalPart = words.slice(0, words.length - count).join(" ");
      highlightPart = words.slice(-count).join(" ");
    }

    return (
      <>
        {position === "start" ? (
          <>
            <span style={{ color: color || "#1A7D85" }}>{highlightPart}</span>{" "}
            {normalPart}
          </>
        ) : (
          <>
            {normalPart}{" "}
            <span style={{ color: color || "#1A7D85" }}>{highlightPart}</span>
          </>
        )}
      </>
    );
  };
