import React from "react"
import Enzyme, { shallow } from "enzyme"

import Adapter from "enzyme-adapter-react-16"

import Cards from "./"
import data from "../../data/data"

Enzyme.configure({ adapter: new Adapter() })

describe("Cards", () => {
  const wrapper = shallow(<Cards data={data} />)

  it("Card component contains 8 cards", () => {
    expect(wrapper.find("[data-test='card_container']").length).toEqual(8)
  })

  it("Card component 1 link", () => {
    expect(
      wrapper
        .find("[data-test='card_container']")
        .at(0)
        .prop("href")
    ).toEqual(data[0].url)
  })

  it("Card component 1 image", () => {
    expect(
      wrapper
        .find("[data-test='card_image']")
        .at(0)
        .prop("image")
    ).toEqual(data[0].image)
  })

  it("Card component 1 title", () => {
    expect(
      wrapper
        .find("[data-test='card_title']")
        .at(0)
        .text()
    ).toEqual(data[0].title)
  })

  it("Card matches shapshot", () => {
    expect(wrapper).toMatchSnapshot()
  })
})
