import React from "react"
import Enzyme, { shallow } from "enzyme"

import Adapter from "enzyme-adapter-react-16"

import Header from "./"

Enzyme.configure({ adapter: new Adapter() })

describe("Header", () => {
  const wrapper = shallow(<Header />)

  it("Header has logo", () => {
    expect(wrapper.find("[data-test='logo_img']").prop("src")).toEqual(
      "/SoleLogo.png"
    )
  })

  it("Header has link", () => {
    expect(wrapper.find("[data-test='logo_link']").prop("to")).toEqual("/")
  })

  it("Header matches shapshot", () => {
    expect(wrapper).toMatchSnapshot()
  })
})
