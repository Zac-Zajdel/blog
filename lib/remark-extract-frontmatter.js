import { visit } from 'unist-util-visit'
import { load } from 'js-yaml'

export default function extractFrontmatter() {
  return (tree, file) => {
    // eslint-disable-next-line no-unused-vars
    visit(tree, 'yaml', (node, index, parent) => {
      file.data.frontmatter = load(node.value)
    })
  }
}
