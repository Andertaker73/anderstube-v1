import React, { useState } from "react"
import { Segment, Input, Form } from "semantic-ui-react"

export default function SearchBar() {
  const [searchBarText, setSearchBarText] = useState("")

  function handleChange(event) {
    setSearchBarText(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <div className="search-bar">
      <Segment stacked>
        <Form onSubmit={handleSubmit}>
          <Input
            icon="search"
            size="large"
            placeholder="..."
            value={searchBarText}
            onChange={handleChange}
          />
        </Form>
      </Segment>
    </div>
  )
}
