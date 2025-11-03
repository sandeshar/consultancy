# Contributing to B&B Education Consultancy

Thank you for your interest in contributing! This document provides guidelines for contributing to this project.

## 🤝 How to Contribute

### Reporting Bugs

If you find a bug, please create an issue with:
- Clear description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)
- Browser/device information

### Suggesting Features

We welcome feature suggestions! Please create an issue with:
- Clear description of the feature
- Use case and benefits
- Potential implementation approach (optional)

### Code Contributions

1. **Fork the Repository**
   ```bash
   git clone https://github.com/yourusername/consultancy.git
   cd consultancy
   ```

2. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Your Changes**
   - Follow the existing code style
   - Write clear commit messages
   - Test your changes thoroughly

4. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "feat: add new feature description"
   ```

5. **Push to Your Fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**
   - Provide a clear description of changes
   - Reference any related issues
   - Ensure all tests pass

## 📝 Coding Standards

### TypeScript
- Use TypeScript for all new files
- Provide proper type definitions
- Avoid using `any` type when possible

### Code Style
- Use 4 spaces for indentation
- Use meaningful variable names
- Keep functions small and focused
- Add comments for complex logic

### React/Next.js Best Practices
- Use functional components with hooks
- Implement proper error boundaries
- Follow Next.js 15 App Router conventions
- Use Server Components by default, Client Components when needed

### CSS/Tailwind
- Use Tailwind utility classes
- Keep custom CSS in globals.css
- Follow mobile-first responsive design
- Use semantic class names for custom components

## 🧪 Testing

Before submitting a PR:
- Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- Test responsive design on mobile devices
- Verify all forms work correctly
- Check admin dashboard functionality
- Ensure no console errors

## 📚 Documentation

If your contribution includes:
- **New features**: Update README.md
- **API changes**: Update API documentation
- **Configuration changes**: Update .env.example
- **Complex code**: Add inline comments

## 🔍 Pull Request Guidelines

### PR Title Format
Use conventional commit format:
- `feat: add new feature`
- `fix: resolve bug in component`
- `docs: update README`
- `style: format code`
- `refactor: restructure component`
- `test: add tests for feature`
- `chore: update dependencies`

### PR Description Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
Describe how you tested your changes

## Screenshots (if applicable)
Add screenshots here

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings generated
- [ ] Tested on multiple browsers
```

## 🚫 What NOT to Contribute

- Unrelated features that don't fit the project scope
- Breaking changes without discussion
- Code that violates security best practices
- Untested code
- Code that doesn't follow project standards

## 📋 Development Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

3. **Start MongoDB** (if running locally)
   ```bash
   mongod
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Access the application**
   - Website: http://localhost:3000
   - Admin: http://localhost:3000/login
   - Seed: http://localhost:3000/seed

## 🐛 Common Issues & Solutions

### Port Already in Use
```bash
# Kill process on port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux:
lsof -ti:3000 | xargs kill -9
```

### MongoDB Connection Error
- Ensure MongoDB is running
- Check connection string in .env.local
- Verify network connectivity

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

## 💬 Communication

- **Questions**: Open a GitHub Discussion
- **Bugs**: Create a GitHub Issue
- **Features**: Create a GitHub Issue with "enhancement" label
- **Security**: Email directly (don't create public issues)

## 📜 Code of Conduct

### Our Standards

- **Be respectful**: Treat everyone with respect and kindness
- **Be collaborative**: Work together towards common goals
- **Be inclusive**: Welcome diverse perspectives
- **Be professional**: Maintain professionalism in all interactions

### Unacceptable Behavior

- Harassment or discrimination
- Trolling or inflammatory comments
- Spam or self-promotion
- Publishing private information
- Any illegal activity

## 🎯 Priority Areas

Areas where we especially welcome contributions:

1. **UI/UX Improvements**
   - Mobile responsiveness enhancements
   - Accessibility improvements
   - Animation refinements

2. **Features**
   - Email notifications for inquiries
   - Advanced search and filtering
   - Analytics dashboard
   - Document upload functionality

3. **Performance**
   - Image optimization
   - Code splitting improvements
   - Database query optimization

4. **Testing**
   - Unit tests
   - Integration tests
   - E2E tests

5. **Documentation**
   - API documentation
   - Component documentation
   - Video tutorials

## 📊 Project Structure

Understanding the project structure will help you contribute effectively:

```
consultancy/
├── src/app/              # Next.js App Router pages
│   ├── (admin)/         # Admin-only routes
│   ├── api/             # API endpoints
│   └── db/              # Database models
├── src/components/       # React components
│   ├── admin/           # Admin-specific components
│   └── *.tsx            # Shared components
└── public/              # Static assets
```

## 🏆 Recognition

Contributors will be:
- Listed in our CONTRIBUTORS.md file
- Mentioned in release notes
- Given credit in the project README

## 📝 License

By contributing, you agree that your contributions will be licensed under the MIT License.

## 🙏 Thank You

Your contributions make this project better! We appreciate your time and effort.

---

**Questions?** Open an issue or discussion, and we'll be happy to help!
