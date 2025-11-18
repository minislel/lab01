function ProfileParagraph(text) {
  return (
    <div className="mb-3">
      <div>
        <strong className="text-muted">{text.label}</strong>
        <p className="mb-0 mt-1">{text.title}</p>
      </div>
    </div>
  );
}
export default ProfileParagraph;
