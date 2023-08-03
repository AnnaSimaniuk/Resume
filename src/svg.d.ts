import React, { DOMAttributes } from "react";

declare module "react" {
  interface SVGProps<T> extends DOMAttributes<T> {
    set?: React.SVGProps<SVGSetElement>;
  }
}
