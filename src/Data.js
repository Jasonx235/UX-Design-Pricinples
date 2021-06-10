// Yes you can store components inside objects

const menuItems = [
  {
    id: 0,
    name: "About",
    description:
      "UX design principles are the building blocks to intuitive interactions between the user and the product/service. Don Norman, the pioneer of modern UX design philosophies, formulated six design principles in his book The Design of Everyday Things. These design principles are incorporated into our daily lives from the doors we use to enter rooms to the apps on our smartphones. This website was designed to demonstrate the six principles of design using simple and interactive modules so that anyone can learn how each principle influences the design process.",
    links: [
      "https://uxdesign.cc/general-principles-of-design-don-normans-principles-4e2d97267905",
      "https://uxdesign.cc/general-principles-of-design-don-normans-principles-4e2d97267905",
    ],
  },
  {
    id: 1,
    name: "Affordance",
    description:
      "Affordance is the principle that allows users to instinctively know what actions can be taken. You should be able to intuitively act without having to think about it. The most basic example of this principle is doors, when you see a door with a handle you instinctively try to pull the door, and when there is a flat surface you think to push. ",
    withDescription:
      "The module without affordance provides a semi confusing increment and decrement feature that requires a bit of thought to understand its behavior",
    withoutDescription:
      "The module with affordance demonstrates a simple counter with a plus and minus to increment and decrement respectively",
    links: [
      "https://www.interaction-design.org/literature/topics/affordances#:~:text=Affordances%20are%20properties%20of%20objects,to%20be%20turned%20or%20pushed",
      "https://uxdesign.cc/affordance-in-user-interface-design-3b4b0b361143",
    ],
  },
  {
    id: 2,
    name: "Consistency",
    description:
      "Consistency is the principle that is concerned with the overall uniformity of the aesthetics and functionality of a certain product/service. Having a consistent look and feel across your service/brand allows the user to have a sense of familiarity and reliability. Google has a consistent theme throughout all of its products and services.",
    withDescription:
      "The module without consistency displays a series of icons in various styles, it looks disorganized and does not feel right",
    withoutDescription:
      "The module with consistency displays a series of icons in a similar style, allowing the user to acknowledge a sense of cohesiveness",
    links: [
      "https://careerfoundry.com/en/blog/ui-design/the-importance-of-consistency-in-ui-design/#:~:text=Consistency%20in%20UI%20design%20is,control%2C%20familiarity%2C%20and%20reliability",
      "https://www.interaction-design.org/literature/article/principle-of-consistency-and-standards-in-user-interface-design",
    ],
  },
  {
    id: 3,
    name: "Constraint",
    description:
      "Constraint is the principle that restricts users from performing certain actions. All actions should not be available to the user at all times because they will always do things that weren’t intended, by limiting options for the users you can protect them from unintended errors.",
    withDescription:
      "The module without constraint allows the user to submit an empty name which will result in an error",
    withoutDescription:
      "The module with constraint does not allow the user to submit an empty field, the submit button will only allow you to proceed when the field is occupied",
    links: [
      "https://www.zivtech.com/blog/ux-principles-constraints-discoverability-feedback-and-more",
      "https://www.uxmatters.com/mt/archives/2016/05/the-role-of-constraints-in-design-innovation.php",
    ],
  },
  {
    id: 4,
    name: "Feedback",
    description:
      "Feedback is the principle that notifies the user that an action has been acknowledged and what the next steps are. There are many forms of feedback: visual, audio, tactile, etc. Each is used depending on the context in which they are needed. Let's say you are completing a purchase and press the confirm button, you want some feedback in the manner of a message to confirm that your order was placed.",
    withDescription:
      "The module without feedback allows you to click a button and wait for an unknown outcome without certainty of the click or the following outcome",
    withoutDescription:
      "The module with feedback provides a visual and tactile response that will let the user know the outcome of their actions throughout all the steps",
    links: [
      "https://medium.com/@sachinrekhi/don-normans-principles-of-interaction-design-51025a2c0f33#:~:text=Feedback,tactile%2C%20audio%2C%20and%20more.",
      "https://sbmi.uth.edu/nccd/ehrusability/design/guidelines/Principles/feedback.htm",
    ],
  },
  {
    id: 5,
    name: "Mapping",
    description:
      "Mapping is the principle that refers to the relationship between the actions you perform on a controller and the expected reaction. A well-designed product/service will not need labels to indicate the functionality because the mapping was clear.  An example of unclear mapping is the stove in your kitchen, there are four burners played out in a square pattern and four knobs in a row. Without having labels on each knob it would be difficult to discern which knob turns on which burner.",
    withDescription:
      "The module without mapping shows three symbols that allow the user to turn on the lightbulbs except it isn't immediately apparent which button correlates to which lightbulb",
    withoutDescription:
      "The module with mapping is marked with which symbol correlates to which lightbulb, there is no guessing needed to know what each of the symbols does",
    links: [
      "https://medium.com/@sachinrekhi/don-normans-principles-of-interaction-design-51025a2c0f33",
      "https://www.bresslergroup.com/blog/design-defined-how-should-mapping-determine-your-controls/",
    ],
  },
  {
    id: 6,
    name: "Visibility",
    description:
      "Visibility is the principle that keeps the user visibly aware that there is information or action present. Having a good balance of visual cues throughout your product/service allows the user to quickly navigate and experience it in the most effective way possible. Examples of visual aids would be large call-to-action buttons on home pages that allow you to view important content.",
    withDescription:
      "The module without visibility has a basic page with a welcome sign and a slightly hidden call to action link that will take the user to the desired location, however, it is not immediately apparent where the button is",
    withoutDescription:
      "The module with visibility has a clear and present call to action button that is immediately noticeable and does not require the user to search",
    links: [
      "https://givegoodux.com/visibility-5-principles-interaction-design-supercharge-ui-2-5/",
      "https://medium.com/nyc-design/1-visibility-of-system-status-with-examples-5e3bc9adfe7b",
    ],
  },
];

export default menuItems;
