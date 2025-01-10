// contentlayer.config.js
import { defineDocumentType, defineNestedType, makeSource } from "contentlayer2/source-files";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { visit as visit2 } from "unist-util-visit";
import RawPlugin from "esbuild-plugin-raw";

// plugins/codeBlock.ts
import { visit } from "unist-util-visit";
function remarkCodePlugin() {
  return (tree) => {
    visit(tree, "code", (node) => {
      if (node.lang === "codeBlock") {
        const meta = node.meta || "";
        const value = node.value || "";
        if (!meta || !value) {
          return;
        }
        Object.assign(node, {
          type: "mdxJsxFlowElement",
          name: "Snippet",
          attributes: [
            {
              type: "mdxJsxAttribute",
              name: "disableTooltip",
              value: true
            },
            {
              type: "mdxJsxAttribute",
              name: "fullWidth",
              value: true
            },
            {
              type: "mdxJsxAttribute",
              name: "hideSymbol",
              value: true
            },
            {
              type: "mdxJsxAttribute",
              name: "classNames",
              value: {
                type: "mdxJsxAttributeValueExpression",
                value: "{base: 'bg-code-background text-code-foreground' , pre: 'font-light text-base', copyButton: 'text-lg text-zinc-500 mr-2'}",
                data: {
                  estree: {
                    type: "Program",
                    body: [
                      {
                        type: "ExpressionStatement",
                        expression: {
                          type: "ObjectExpression",
                          properties: [
                            {
                              type: "Property",
                              method: false,
                              shorthand: false,
                              computed: false,
                              key: {
                                type: "Identifier",
                                name: "base"
                              },
                              value: {
                                type: "Literal",
                                value: "bg-code-background text-code-foreground",
                                raw: "'bg-code-background text-code-foreground'"
                              },
                              kind: "init"
                            },
                            {
                              type: "Property",
                              method: false,
                              shorthand: false,
                              computed: false,
                              key: {
                                type: "Identifier",
                                name: "pre"
                              },
                              value: {
                                type: "Literal",
                                value: "font-light text-base",
                                raw: "'font-light text-base'"
                              },
                              kind: "init"
                            },
                            {
                              type: "Property",
                              method: false,
                              shorthand: false,
                              computed: false,
                              key: {
                                type: "Identifier",
                                name: "copyButton"
                              },
                              value: {
                                type: "Literal",
                                value: "text-lg text-zinc-500 mr-2",
                                raw: "'text-lg text-zinc-500 mr-2'"
                              },
                              kind: "init"
                            }
                          ]
                        }
                      }
                    ],
                    sourceType: "module",
                    comments: []
                  }
                }
              }
            }
          ],
          children: [
            {
              type: "mdxJsxFlowElement",
              name: "Codeblock",
              attributes: [
                {
                  type: "mdxJsxAttribute",
                  name: "removeIndent",
                  value: true
                },
                {
                  type: "mdxJsxAttribute",
                  name: "language",
                  value: meta
                },
                {
                  type: "mdxJsxAttribute",
                  name: "codeString",
                  value
                }
              ]
            }
          ]
        });
      }
    });
  };
}
var codeBlock_default = remarkCodePlugin;

// contentlayer.config.js
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
  },
  url: { type: "string", resolve: (doc) => `/${doc._raw.flattenedPath}` }
};
var Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `docs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: false },
    date: { type: "date", required: false }
  },
  computedFields
}));
var AuthorProperties = defineNestedType(() => ({
  name: "AuthorProperties",
  fields: {
    name: { type: "string", required: true },
    link: { type: "string", required: false },
    avatar: { type: "string", required: false },
    username: { type: "string", required: false }
  }
}));
var BlogPost = defineDocumentType(() => ({
  name: "BlogPost",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    date: { type: "date", required: true },
    draft: { type: "boolean", required: false },
    tags: { type: "list", of: { type: "string" } },
    author: { type: "nested", of: AuthorProperties, required: false },
    image: { type: "string", required: false }
  },
  computedFields: {
    ...computedFields,
    // Date format June 22nd 2023
    formattedDate: {
      type: "string",
      resolve: (doc) => {
        const date = new Date(doc.date);
        const options = { year: "numeric", month: "long", day: "numeric" };
        return date.toLocaleDateString("en-US", options);
      }
    },
    // add https://nextui.org to the image path
    imageAsParams: {
      type: "string",
      resolve: (doc) => {
        const image = doc.image;
        if (image) {
          return `https://nextui.org${image}`;
        }
      }
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "./content",
  documentTypes: [Doc, BlogPost],
  mdx: {
    remarkPlugins: [remarkGfm, codeBlock_default],
    esbuildOptions(options) {
      options.plugins || (options.plugins = []);
      options.plugins.unshift(RawPlugin());
      return options;
    },
    rehypePlugins: [
      rehypeSlug,
      () => (tree) => {
        visit2(tree, "element", (node) => {
          if (node.tagName === "code" && node.data && node.data.meta) {
            node.properties.meta = node.data.meta;
          }
        });
      }
    ]
  }
});
export {
  BlogPost,
  Doc,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-DYSKVRJF.mjs.map
