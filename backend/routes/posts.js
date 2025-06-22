// backend/routes/posts.js
router.post('/posts', async (req, res) => {
  try {
    const { title, content } = req.body;
    const post = await Post.create({ title, content });
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong.' });
  }
});
