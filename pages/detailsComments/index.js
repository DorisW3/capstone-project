import CommentForm from "@/components/CommentForm";

export default function DetailsComments() {
  return (
    <>
      <CommentForm onSubmitComment={handleSubmitComment} />
    </>
  );
}
