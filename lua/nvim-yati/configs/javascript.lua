---@type YatiConfig
local config = {
  indent = {
    "array",
    "object",
    "object_pattern",
    "arguments",
    "statement_block",
    "class_body",
    "parenthesized_expression",
    "formal_parameters",
    "jsx_element",
    "jsx_fragment",
    "jsx_opening_element",
    "jsx_expression",
    "switch_body",
    "member_expression",
    "template_string",
  },
  indent_last = {
    "expression_statement",
    "variable_declarator",
    "lexical_declaration",
    "ternary_expression",
    "binary_expression",
    "return_statement",
    "if_statement",
    "else_clause",
    "while_statement",
    "jsx_self_closing_element",
  },
  indent_last_new_line = {
    "assignment_expression",
    "call_expression",
  },
  skip_child = {
    if_statement = { named = { "statement_block", "else_clause" } },
    else_clause = { named = { "statement_block" } },
    while_statement = { named = { "statement_block" } },
    jsx_fragment = { literal = { "<" } },
  },
  ignore = { literal = { ";" }, named = { "comment", "description", "jsx_text" } },
}

return config
