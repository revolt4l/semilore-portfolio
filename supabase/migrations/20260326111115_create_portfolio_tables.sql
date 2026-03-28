/*
  # Portfolio Database Schema

  1. New Tables
    - `projects`
      - `id` (uuid, primary key)
      - `title` (text, project title)
      - `description` (text, project description)
      - `tech_stack` (text[], array of technologies)
      - `image_url` (text, project image URL)
      - `live_url` (text, live project URL)
      - `github_url` (text, optional GitHub URL)
      - `order_index` (integer, for sorting)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `resume`
      - `id` (uuid, primary key)
      - `file_url` (text, resume file URL)
      - `file_name` (text, resume file name)
      - `updated_at` (timestamptz)
  
  2. Security
    - Enable RLS on both tables
    - Allow public read access
    - Only authenticated users can insert/update/delete
*/

CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  tech_stack text[] NOT NULL DEFAULT '{}',
  image_url text,
  live_url text,
  github_url text,
  order_index integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS resume (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  file_url text NOT NULL,
  file_name text NOT NULL,
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE resume ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view projects"
  ON projects FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can insert projects"
  ON projects FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update projects"
  ON projects FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete projects"
  ON projects FOR DELETE
  TO authenticated
  USING (true);

CREATE POLICY "Anyone can view resume"
  ON resume FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can insert resume"
  ON resume FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update resume"
  ON resume FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete resume"
  ON resume FOR DELETE
  TO authenticated
  USING (true);

INSERT INTO projects (title, description, tech_stack, live_url, order_index) VALUES
  ('Tremokearo', 'A modern web application built with vanilla JavaScript', ARRAY['HTML', 'CSS', 'JavaScript', 'Vercel'], 'https://tremokearo.vercel.app', 1),
  ('Goratechpowerhub', 'A comprehensive energy solutions platform with modern UI', ARRAY['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'], 'https://goratechpowerhub.vercel.app', 2)
ON CONFLICT DO NOTHING;