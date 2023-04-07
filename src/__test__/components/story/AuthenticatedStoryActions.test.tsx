// import { AuthenticatedStoryActions } from "../../../components/story/AuthenticatedStoryActions";
// import { store } from "../../../app/store";
// import "@testing-library/jest-dom/extend-expect";
// import { render, screen, fireEvent } from "@testing-library/react";
// import { Provider } from "react-redux";
// import { signIn } from "../../../features/authSlice";
// import { act } from "react-dom/test-utils";
// import React from "react";
// import { StoryModal } from "../../../components/story/StoryModal";

// // jest.mock("../../../components/story/StoryModal", () => ({
// //   __esModule: true,
// //   StoryModal: (props: any) => {
// //     return <> Mock React Portal</>;
// //   },
// // }));
// jest.mock("../../../components/story/StoryModal", () => {
//   return {
//     StoryModal: jest.fn((props: any) => {
//       console.log(props);
//       return <div>Mocked StoryModal</div>;
//     }),
//   };
// });

// const testStory1 = {
//   author: "Rakibul",
//   id: 1,
//   title: "test story",
//   story: "this is a test story",
//   postedAt: "some date",
// };

// const testStory2 = {
//   author: "RakibulRanak",
//   id: 1,
//   title: "test story",
//   story: "this is a test story",
//   postedAt: "some date",
// };

// describe("Render AuthencitedStoryActions", () => {
//   const setUpTest = (testStory: any): void => {
//     render(
//       <Provider store={store}>
//         <AuthenticatedStoryActions {...testStory}></AuthenticatedStoryActions>
//       </Provider>
//     );
//   };

//   // test("Render successfully and edit delete icon not found while logged out", () => {
//   //   setUpTest(testStory1);
//   //   const editButton = screen.queryByTestId("EditIcon");
//   //   expect(editButton).not.toBeInTheDocument();
//   //   const deleteButton = screen.queryByTestId("DeleteIcon");
//   //   expect(deleteButton).not.toBeInTheDocument();
//   // });

//   // test("Render successfully and edit delete icon not found when user is logged in but author name is different", () => {
//   //   act(() => {
//   //     setUpTest(testStory1);
//   //     store.dispatch(
//   //       signIn({ username: "RakibulRanak", password: "12345678" })
//   //     );
//   //   });
//   //   const editButton = screen.queryByTestId("EditIcon");
//   //   expect(editButton).not.toBeInTheDocument();
//   //   const deleteButton = screen.queryByTestId("DeleteIcon");
//   //   expect(deleteButton).not.toBeInTheDocument();
//   // });

//   test("Render successfully and edit delete icon found when logged in username and author same", () => {
//     act(() => {
//       setUpTest(testStory2);
//       store.dispatch(
//         signIn({ username: "RakibulRanak", password: "12345678" })
//       );
//     });
//     const editButton = screen.getByTestId("EditIcon");
//     expect(editButton).toBeInTheDocument();
//     const deleteButton = screen.getByTestId("DeleteIcon");
//     expect(deleteButton).toBeInTheDocument();
//     fireEvent.click(editButton);
//     expect(StoryModal).toHaveBeenCalledWith({
//       id: testStory2.id,
//       title: testStory2.title,
//       story: testStory2.story,
//       close: () => {},
//     });
//   });
// });
export {};
