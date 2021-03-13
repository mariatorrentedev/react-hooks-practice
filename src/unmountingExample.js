import React from "react";

export const UnmountingExample = () => {
  React.useEffect(() => {
    console.log("render");

    return () => {
      console.log("unmount");
    };
  }, []);

  return <div>Hi Now I'm Here Again, Toggle and I'll be unmounted</div>;
};
